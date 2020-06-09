from flask import Flask, jsonify, request
from bson import json_util
from bson.objectid import ObjectId
import json
from config import Response

def add_customer(mongo, params, response):
    try: 
        mongo.db.bill.insert_one(params['bill'])  # Save to unPaidBill Colection
        bills = []
        bills.append(params['bill'])
        params['bill'] = bills   # To save all of bills to databse which are bought by customer    

        # Save to database 
        mongo.db.customer.insert_one(params)    # customer Colection         
        mongo.db.unPaidBill.insert_one(params)  # unPaidBill Colection      

        response.create(Response.SUCCESS)
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))
    except Exception as e:
        print(e)
        response.create(Response.ERROR)
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))
    
    return output

def add_bill(mongo):
    try:
        response = Response()
        params = order = json.loads(request.data)
        customerDB = list(mongo.db.customer.find({}))
        if (len(customerDB)==0):
            output = add_customer(mongo, params, response)
        else:
            extracted = mongo.db.customer.find_one_or_404({'uid': params['uid']})
            if (extracted): 
                mongo.db.bill.insert_one(params['bill'])  # Save to unPaidBill Colection 
                extracted['bill'].append(params['bill'])    # Add new bill to old bill list   

                # Save to database         
                mongo.db.customer.update({'uid': params['uid']}, {'$set': extracted})   # customer Colection 
                mongo.db.unPaidBill.update({'uid': params['uid']}, {'$set': extracted})  # unPaidBill Colection 

                response.create(Response.SUCCESS)
                output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))
            else:            
                output = add_customer(mongo, params, response)       
        ## Update quantity for product in DB
        output = update_product_quantity(mongo, order['bill']['cart'], response)
    except Exception as e:
        print(e)
        response.create(Response.ERROR)
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))

    return output

def update_product_quantity(mongo, cart, response):
    try:
        for item in cart:
            productDB = mongo.db.product.find_one_or_404({'_id': ObjectId(item['product']['id'])})
            productDB['quantity'] -= item['quantityPurchased']
            productDB['soldNumber'] += item['quantityPurchased']
            mongo.db.product.update({'_id': productDB['_id']}, {'$set': productDB})
        response.create(Response.SUCCESS)
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))
    except Exception as e:
        print(e)
        response.create(Response.ERROR)
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))
    
    return output