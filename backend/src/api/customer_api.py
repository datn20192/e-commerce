from flask import Flask, jsonify
from bson import json_util
import json
from src.config import Response

def get_customer_by_account(mongo, account):
    try:
        response = Response()
        extracted= mongo.db.customer.find_one_or_404({'account': account})
        processed = {
            'id': extracted['_id'],
            'account': extracted['account'],
            'name': extracted['name'],
            'phoneNumber': extracted['phoneNumber'],
            'address': extracted['address']
        }
        response.create(Response.SUCCESS)
        response.data = processed
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False).encode('utf-8'))
    except:
        response.create(Response.ERROR)
        response.data = ""
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False).encode('utf-8'))

    return output

