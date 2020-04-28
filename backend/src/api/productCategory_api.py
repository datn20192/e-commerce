from flask import Flask, jsonify, request
from bson import json_util
import json
from config import Response

def get_all_categories(mongo):
    try:
        response = Response()
        processed = []
        extracted = list(mongo.db.productCategory.find({}))
        for category in extracted:
            processed.append({
                'groupId': category['groupId'],                
                'name': category['name'],
                'children': category['children']                                      
            })    
        response.create(Response.SUCCESS)
        response.data = processed             
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))
    except:
        response.create(Response.ERROR)
        response.data = "Datebase connection is false."
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))

    return output

def get_all_categories_non_group(mongo):
    try:
        response = Response()
        processed = []
        extracted = list(mongo.db.productCategory.find({}))        
        for categoryGroup in extracted:                       
            for category in categoryGroup['children']:                               
                processed.append({
                    'id': category['id'],
                    'name': category['name'],
                    'quantity': category['quantity'],
                    'url': category['url'],
                    'icon': category['icon']
                })
        response.create(Response.SUCCESS)
        response.data = processed        
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))       
    except:
        print(response.data)
        response.create(Response.ERROR)
        response.data = "Datebase connection is false."
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))
        
    return output

def add_category(mongo):
    try:
        response = Response()
        params = json.loads(request.data)
        mongo.db.productCategory.insert(params)
        response.create(Response.SUCCESS)
        response.data = 'category was created.'       
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))
    except:
        response.create(Response.ERROR)
        response.data = "Datebase connection is false."
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))

    return output
    
def update_category(mongo):
    try:
        response = Response()
        params = json.loads(request.data)
        mongo.db.productCategory.update({'id': params['id']}, {'$set': params})
        response.create(Response.SUCCESS)
        response.data = 'category was updated.'
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))
    except:
        response.create(Response.ERROR)
        response.data = 'Datebase connection is false.'
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))

    return output

def delete_category(mongo):
    try:
        response = Response()
        params = json.loads(request.data)
        mongo.db.productCategory.remove({'id': params['id']})
        response.create(Response.SUCCESS)
        response.data = 'category was deleted.'
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))
    except:
        response.create(Response.ERROR)
        response.data = 'Datebase connection is false.'
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))

    return output