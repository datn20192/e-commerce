from flask import Flask, jsonify, request
from bson import json_util
import json
from config import Response
from datetime import datetime

def get_year(date):
    dt = datetime.strptime(date,'%m/%d/%Y, %I:%M:%S %p')
    return str(dt.year)
def get_month(date):
    dt = datetime.strptime(date,'%m/%d/%Y, %I:%M:%S %p')
    return str(dt.month)
def get_day(date):
    dt = datetime.strptime(date,'%m/%d/%Y, %I:%M:%S %p')
    return str(dt.day)

def get_bill_by_all_year(mongo):
    try:
        response = Response()
        processed = []
        extracted = list(mongo.db.paidBill.find({}))
        for paidBill in extracted:
            processed.append({
                'cart': paidBill['cart'],
                'date': paidBill['date'],
                'totalMoney': paidBill['totalMoney'],
            })
        response.create(Response.SUCCESS)
        response.data = processed        
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))
    except:
        response.create(Response.ERROR)
        response.data = "Datebase connection is false."
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))
    return output
def get_bill_by_year(mongo,year):
    try:
        response = Response()
        processed = []

        extracted = list(mongo.db.paidBill.find({}))
        for paidBill in extracted:
            if(year == get_year(paidBill['date'])):
                processed.append({
                'cart': paidBill['cart'],
                'date': paidBill['date'],
                'totalMoney': paidBill['totalMoney'],
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
        extracted = list(mongo.db.paidBill.find({}))
        for paidBill in extracted:
            if(year == get_year(paidBill['date']) and month == get_month(paidBill['date'])):
                processed.append({
                'cart': paidBill['cart'],
                'date': paidBill['date'],
                'totalMoney': paidBill['totalMoney'],
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
        extracted = list(mongo.db.paidBill.find({}))
        for paidBill in extracted:
            if((year == get_year(paidBill['date'])) and (month == get_month(paidBill['date'])) and (day == get_day(paidBill['date']))):
                processed.append({
                'cart': paidBill['cart'],
                'date': paidBill['date'],
                'totalMoney': paidBill['totalMoney'],
            })
        response.create(Response.SUCCESS)
        response.data = processed        
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))
    except:
        response.create(Response.ERROR)
        response.data = "Datebase connection is false."
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))
    return output