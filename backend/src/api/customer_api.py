from flask import Flask, jsonify, request
from bson import json_util
from bson.objectid import ObjectId
import json
from config import Response

def add_customer(mongo, params, response):
    try: 
        bill = params['bill']
        bill['uid'] = params['uid']
        bill['email'] = params['email']
        mongo.db.bill.insert_one(bill)  # Save to bill Colection
        bills = []
        bills.append(params['bill'])
        params['bill'] = bills   # To save all of bills to databse which are bought by customer    

        # Save to database 
        mongo.db.customer.insert_one(params)    # customer Colection        

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
        params = json.loads(request.data)
        order = json.loads(request.data)
        customerDB = list(mongo.db.customer.find({}))
        if (len(customerDB)==0):
            output = add_customer(mongo, params, response)
        else:
            extracted = mongo.db.customer.find_one({'uid': params['uid']})            
            if (extracted): 
                bill = {}
                bill = params['bill']
                bill['uid'] = params['uid']
                bill['email'] = params['email']

                mongo.db.bill.insert_one(bill)  # Save to bill Colection 
                extracted['bill'].append(params['bill'])    # Add new bill to old bill list   
                # Save to database         
                mongo.db.customer.update({'uid': params['uid']}, {'$set': extracted})   # customer Colection 

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

def submit_online_payment(mongo):
    try:
        response = Response()
        params = json.loads(request.data)
        mongo.db.bill.update({'onlinePaymentID': params['onlinePaymentID']}, {'$set':{'onlinePaymentChecking': True}})
        customer = mongo.db.customer.find_one_or_404({'uid': params['uid']})
        for bill in customer['bill']:
            if(bill['onlinePaymentID']==params['onlinePaymentID']):
                bill['onlinePaymentChecking'] = True
        mongo.db.customer.update({'uid': params['uid']}, {'$set':customer})
        response.create(Response.SUCCESS)
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))
    except Exception as e:
        print(e)
        response.create(Response.ERROR)
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))
    
    return output

def get_customer(mongo):
    try:
        response = Response()
        processed = []
        extracted = list(mongo.db.customer.find({}))        
        for customer in extracted:    
            paidNumber = 0
            unPaidNumber = 0
            for bill in customer['bill']:
                bill['id'] = str(bill['_id'])   
                bill.pop('_id') 
                if bill['status'] == True:
                    paidNumber = paidNumber + 1
                else: 
                    unPaidNumber = unPaidNumber + 1                  
            processed.append({
                'uid': customer['uid'],
                'email': customer['email'],
                'name': customer['bill'][0]['infor']['name'],
                'bill': customer['bill'],  
                'paidNumber': paidNumber,
                'unPaidNumber': unPaidNumber              
            })
            
        response.create(Response.SUCCESS)
        response.data = processed        
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))
    except Exception as e:
        print(e)
        response.create(Response.ERROR)
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))

    return output    

def get_number_of_customers(mongo):
    try:
        response = Response()
        extracted = list(mongo.db.customer.find({}))  

        response.create(Response.SUCCESS)
        response.data = len(extracted)        
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))
    except Exception as e:
        print(e)
        response.create(Response.ERROR)
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))

    return output  


