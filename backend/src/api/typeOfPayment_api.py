from flask import Flask, jsonify
from bson import json_util
import json
from src.config import Response

def get_all_type_of_payment(mongo):
    try:
        response = Response()
        processed = []
        extracted = list(mongo.db.typeOfPayment.find({}))
        for type in extracted:
            processed.append({
                'id': type['_id'],
                'value': type['value'],
                'name': type['name']
            })
        response.create(Response.SUCCESS)
        response.data = processed
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False).encode('utf-8'))
    except:
        response.create(Response.ERROR)
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False).encode('utf-8'))

    return output