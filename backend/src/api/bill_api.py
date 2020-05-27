from flask import Flask, jsonify, request
from bson import json_util
import json
from config import Response

def get_bill_by_year(mongo,year):
    try:
        response = Response()
        processed = []
        extracted = list(mongo.db.bill.find({'year':year}))
        
        for bill in extracted:
            cartData = []
            for cart in bill['cart']:
                cartData.append({
                    # 'name': cart['name'],
                    'price': cart['price'],
                    'quantity':cart['quantity'],
                    'category': cart['category']
                })
            processed.append({
                # 'id': bill['_id'],
                'cart': cartData,
                'totalPrice': bill['totalPrice'],
                'day': bill['date'],
                'month': bill['month'],
                'year': bill['year']
            })   
        response.create(Response.SUCCESS)
        response.data = processed        
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))
    except:
        response.create(Response.ERROR)
        response.data = "Datebase connection is false."
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))

    return output
def get_bill_by_all_year(mongo):
    try:
        response = Response()
        processed = []
        extracted = list(mongo.db.bill.find({}))
        
        for bill in extracted:
            cartData = []
            for cart in bill['cart']:
                cartData.append({
                    # 'name': cart['name'],
                    'price': cart['price'],
                    'quantity':cart['quantity'],
                    'category': cart['category']
                })
            processed.append({
                # 'id': bill['_id'],
                'cart': cartData,
                'totalPrice': bill['totalPrice'],
                'day': bill['date'],
                'month': bill['month'],
                'year': bill['year']
            })  
        response.create(Response.SUCCESS)
        response.data = processed        
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))
    except:
        response.create(Response.ERROR)
        response.data = "Datebase connection is false."
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))

    return output
def get_bill_by_year_month(mongo,year,month):
    try:
        response = Response()
        processed = []
        extracted = list(mongo.db.bill.find({'year':year, 'month':month}))
        
        for bill in extracted:
            cartData = []
            for cart in bill['cart']:
                cartData.append({
                    # 'name': cart['name'],
                    'price': cart['price'],
                    'quantity':cart['quantity'],
                    'category': cart['category']
                })
            processed.append({
                # 'id': bill['_id'],
                'cart': cartData,
                'totalPrice': bill['totalPrice'],
                'day': bill['date'],
                'month': bill['month'],
                'year': bill['year']
            })
        response.create(Response.SUCCESS)
        response.data = processed        
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))
    except:
        response.create(Response.ERROR)
        response.data = "Datebase connection is false."
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))

    return output
def get_bill_by_day(mongo,year,month,day):
    try:
        response = Response()
        processed = []
        extracted = list(mongo.db.bill.find({'year':year,'month':month,'date':day}))
        
        for bill in extracted:
            cartData = []
            for cart in bill['cart']:
                cartData.append({
                    # 'name': cart['name'],
                    'price': cart['price'],
                    'quantity':cart['quantity'],
                    'category': cart['category']
                })
            processed.append({
                # 'id': bill['_id'],
                'cart': cartData,
                'totalPrice': bill['totalPrice'],
                'day': bill['date'],
                'month': bill['month'],
                'year': bill['year']
            })
        response.create(Response.SUCCESS)
        response.data = processed        
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))
    except:
        response.create(Response.ERROR)
        response.data = "Datebase connection is false."
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))

    return output