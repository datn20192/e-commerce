from flask import Flask, jsonify, request
from bson import json_util
import json
from src.config import Response
import math

def get_all_products(mongo):
    try:
        response = Response()
        processed = []
        extracted = list(mongo.db.product.find({}))
        for product in extracted:            
            processed.append({
                'id': product['_id'],
                'groupID': product['groupID'],
                'groupName': product['groupName'],
                'category': product['category'],
                'name': product['name'],
                'link': product['link'],
                'brand': product['brand'],                
                'imageURL': product['imageURL'],    
                'price': product['price'],            
                'description': product['description'],                          
                'quantity': product['quantity'],
                'star': product['star']
            })    
        response.create(Response.SUCCESS)
        response.data = processed        
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False).encode('utf-8'))
    except:
        response.create(Response.ERROR)
        response.data = "Datebase connection is false."
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False).encode('utf-8'))

    return output

def get_product_byID(mongo, id):
    extracted= mongo.db.product.find_one_or_404({'_id': id})
    processed = {
                'id': extracted['_id'],
                'groupID': extracted['groupID'],
                'groupName': extracted['groupName'],
                'category': extracted['category'],
                'name': extracted['name'],
                'link': extracted['link'],
                'brand': extracted['brand'],                
                'imageURL': extracted['imageURL'],    
                'price': extracted['price'],            
                'description': extracted['description'],                          
                'quantity': extracted['quantity'],
                'star': extracted['star']
                }
    return json_util.dumps(processed, ensure_ascii=False).encode('utf-8')

def get_product_by_category(mongo, category):
    try:
        response = Response()
        processed = []        
        extracted = list(mongo.db.product.find({'category': category}))              
        for product in extracted:           
            processed.append({
                'id': product['_id'],
                'groupID': product['groupID'],
                'groupName': product['groupName'],
                'category': product['category'],
                'name': product['name'],
                'link': product['link'],
                'brand': product['brand'],                
                'imageURL': product['imageURL'],    
                'price': product['price'],            
                'description': product['description'],                          
                'quantity': product['quantity'],
                'star': product['star']
            })    
        response.create(Response.SUCCESS)
        response.data = processed              
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False).encode('utf-8'))
    except:
        response.create(Response.ERROR)
        response.data = "Datebase connection is false."
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False).encode('utf-8'))
    return output

def get_product_by_category_page(mongo, category, page, numOfElement):
    try:      
        page = int(page)
        numOfElement = int(numOfElement)  
        response = Response()            
        productPage = []            # products showed in a page
        extracted = list(mongo.db.product.find({'category': category}))
        
        # information of page      
        totalElement = len(extracted)
        totalPages = math.ceil(totalElement/numOfElement)
        first = (page==1)
        last = (page==totalPages) 
        number = page       

        start = (page - 1)*numOfElement
        for i in range(start, start+numOfElement, 1):
            productPage.append({
                'id': extracted[i]['_id'],
                'groupID': extracted[i]['groupID'],
                'groupName': extracted[i]['groupName'],
                'category': extracted[i]['category'],
                'name': extracted[i]['name'],
                'link': extracted[i]['link'],
                'brand': extracted[i]['brand'],                
                'imageURL': extracted[i]['imageURL'],    
                'price': extracted[i]['price'],            
                'description': extracted[i]['description'],                          
                'quantity': extracted[i]['quantity'],
                'star': extracted[i]['star']
            })
        print(productPage)
        processed = {
            'content': productPage,
            'totalPages': totalPages,
            'totalElement': totalElement,
            'first': first,
            'last': last,
            'size': numOfElement,
            'number': number,
            'sort': ''            
        } 
        response.create(Response.SUCCESS)
        response.data = processed              
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False).encode('utf-8')) 
    except:
        response.create(Response.ERROR)
        response.data = "Datebase connection is false."
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False).encode('utf-8'))
        
    return output

def add_product(mongo):
    try:
        response = Response()
        params = json.loads(request.data)
        mongo.db.product.insert(params)
        response.create(Response.SUCCESS)
        response.data = 'Product was created.'       
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False).encode('utf-8'))
    except:
        response.create(Response.ERROR)
        response.data = "Datebase connection is false."
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False).encode('utf-8'))

    return output
    
def update_product(mongo):
    try:
        response = Response()
        params = json.loads(request.data)
        mongo.db.product.update({'product_id': params['product_id']}, {'$set': params})
        response.create(Response.SUCCESS)
        response.data = 'Product was updated.'
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False).encode('utf-8'))
    except:
        response.create(Response.ERROR)
        response.data = 'Datebase connection is false.'
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False).encode('utf-8'))

    return output

def delete_product(mongo):
    try:
        response = Response()
        params = json.loads(request.data)
        mongo.db.product.remove({'product_id': params['product_id']})
        response.create(Response.SUCCESS)
        response.data = 'Product was deleted.'
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False).encode('utf-8'))
    except:
        response.create(Response.ERROR)
        response.data = 'Datebase connection is false.'
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False).encode('utf-8'))

    return output