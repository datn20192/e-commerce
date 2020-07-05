from flask import Flask, jsonify, request
from bson import json_util
from bson.objectid import ObjectId
import json
from config import Response

def get_map(mongo):
    try:
        response = Response()
        processed = []
        extracted = mongo.db.hanoiDistricts.find({})
        for district in extracted:            
            processed.append({
                'id': str(district['id']),
                'name': district['name'],
                'location': district['location'],
                'type': district['type'],
                'province_id': district['province_id'],
                'ward': district['ward']
            })               
        response.create(Response.SUCCESS)
        response.data = processed        

        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))

    except Exception as e:
        print(e)
        response.create(Response.ERROR)
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))
    
    return output