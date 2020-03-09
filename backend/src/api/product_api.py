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
                'product_id': product['product_id'],
                'name': product['name'],
                'price': product['price'],
                'quantity': product['quantity'],
                'description': product['description'],
                'category': product['category'],
                'imageURL': product['imageURL'],
                
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
    extracted= mongo.db.product.find_one_or_404({'product_id': id})
    processed = {
            'product_id': extracted['product_id'],
            'name': extracted['name'],
            'price': extracted['price'],
            'quantity': extracted['quantity'],
            'description': extracted['description'],
            'category': extracted['category'],
            'imageURL': extracted['imageURL'],
                }
    return json_util.dumps(processed, ensure_ascii=False).encode('utf-8')

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