from flask import Flask, jsonify, request
from bson import json_util
import json
from src.config import Response

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