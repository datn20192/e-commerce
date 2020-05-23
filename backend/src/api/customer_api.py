from flask import Flask, jsonify, request
from bson import json_util
import json
from config import Response

def add_customer(params, response):
    try:        
        mongo.db.customer.insert(params)
        response.create(Response.SUCCESS)
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))
    except:
        response.create(Response.ERROR)
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))
    
    return output

def add_bill(mongo):
    try:
        response = Response()
        params = json.loads(request.data)
        extracted = mongo.db.customer.find_one_or_error({'uid': params['uid']})
        if len(extracted):
            mongo.db.customer.update({'uid': params['uid']}, {'$set': params})
            response.create(Response.SUCCESS)
            output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))
        else:
            output = add_customer(params, response)
    except:
        response.create(Response.ERROR)
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))

    return output