from flask import Flask, jsonify, request
from bson import json_util
from bson.objectid import ObjectId
import json
from config import Response

def submit_delivery(mongo):
    try:
        response = Response()
        params = json.loads(request.data)       # params:   - uid: id of customer
                                                #           - id: id of bill 
        billID = ObjectId(params['billID'])
        mongo.db.bill.update({'_id': billID}, {'$set':{'status': True}})
        customer = mongo.db.customer.find_one_or_404({'uid': params['uid']})
        for bill in customer['bill']:
            if(bill['_id']==billID):
                bill['status'] = True
        mongo.db.customer.update({'uid': params['uid']}, {'$set':customer})
        response.create(Response.SUCCESS)
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))
    except Exception as e:
        print(e)
        response.create(Response.ERROR)
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))
    
    return output