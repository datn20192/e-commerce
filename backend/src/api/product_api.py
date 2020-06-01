from flask import Flask, jsonify, request
from bson import json_util
import json
from config import Response
import math
import re

def no_accent_vietnamese(s):
            s = s.lower()
            s = re.sub(r'[àáạảãâầấậẩẫăằắặẳẵ]', 'a', s)
            s = re.sub(r'[ÀÁẠẢÃĂẰẮẶẲẴÂẦẤẬẨẪ]', 'A', s)
            s = re.sub(r'[èéẹẻẽêềếệểễ]', 'e', s)
            s = re.sub(r'[ÈÉẸẺẼÊỀẾỆỂỄ]', 'E', s)
            s = re.sub(r'[òóọỏõôồốộổỗơờớợởỡ]', 'o', s)
            s = re.sub(r'[ÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠ]', 'O', s)
            s = re.sub(r'[ìíịỉĩ]', 'i', s)
            s = re.sub(r'[ÌÍỊỈĨ]', 'I', s)
            s = re.sub(r'[ùúụủũưừứựửữ]', 'u', s)
            s = re.sub(r'[ƯỪỨỰỬỮÙÚỤỦŨ]', 'U', s)
            s = re.sub(r'[ỳýỵỷỹ]', 'y', s)
            s = re.sub(r'[ỲÝỴỶỸ]', 'Y', s)
            s = re.sub(r'[Đ]', 'D', s)
            s = re.sub(r'[đ]', 'd', s)
            return s
def get_all_products(mongo):
    try:
        response = Response()
        processed = []
        extracted = list(mongo.db.product.find({}))
        for product in extracted:            
            processed.append({
                'id': str(product['_id']),
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
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))
    except:
        response.create(Response.ERROR)
        response.data = "Datebase connection is false."
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))

    return output

def get_product_byID(mongo, id):
    extracted= mongo.db.product.find_one_or_404({'_id': id})
    processed = {
                'id': str(extracted['_id']),
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
    return json_util.dumps(processed, ensure_ascii=False)

def get_product_by_category(mongo, category):
    try:
        response = Response()
        processed = []        
        extracted = list(mongo.db.product.find({'category': category}))
        for product in extracted:           
            processed.append({
                'id': str(product['_id']),
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
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))
    except:
        response.create(Response.ERROR)
        response.data = "Datebase connection is false."
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))
    return output

def get_product_by_category_page(mongo, category, page, numOfElement):
    try:      
        page = int(page)
        numOfElement = int(numOfElement)  
        response = Response()            
        productPage = []            # products showed in a page
        extracted = list(mongo.db.product.find({'category': category}))
        
        # information of page      
        totalElement = len(extracted)
        totalPages = math.ceil(totalElement/numOfElement)
        first = (page==0)
        last = (page==(totalPages-1)) 
        number = page       

        start = (page)*numOfElement
        if(totalElement > start + numOfElement):
            for i in range(start, start+numOfElement, 1):
                productPage.append({
                    'id': extracted[i]['_id'],
                    'groupID': extracted[i]['groupID'],
                    'groupName': extracted[i]['groupName'],
                    'category': extracted[i]['category'],
                    'name': extracted[i]['name'],
                    'link': extracted[i]['link'],
                    'brand': extracted[i]['brand'],                
                    'imageURL': extracted[i]['imageURL'],    
                    'price': extracted[i]['price'],            
                    'description': extracted[i]['description'],                          
                    'quantity': extracted[i]['quantity'],
                    'star': extracted[i]['star']
                })
        else:
            for i in range(start, totalElement, 1):
                productPage.append({
                    'id': extracted[i]['_id'],
                    'groupID': extracted[i]['groupID'],
                    'groupName': extracted[i]['groupName'],
                    'category': extracted[i]['category'],
                    'name': extracted[i]['name'],
                    'link': extracted[i]['link'],
                    'brand': extracted[i]['brand'],                
                    'imageURL': extracted[i]['imageURL'],    
                    'price': extracted[i]['price'],            
                    'description': extracted[i]['description'],                          
                    'quantity': extracted[i]['quantity'],
                    'star': extracted[i]['star']
                })
        
        processed = {
            'content': productPage,
            'totalPages': totalPages,
            'totalElement': totalElement,
            'first': first,
            'last': last,
            'size': numOfElement,
            'number': number,
            'sort': ''            
        } 
        response.create(Response.SUCCESS)
        response.data = processed              
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False)) 
    except:
        response.create(Response.ERROR)
        response.data = "Datebase connection is false."
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))
        
    return output
def get_product_by_filter(mongo, searchedString, page, numOfElement):
    try:      
        page = int(page)
        numOfElement = int(numOfElement)  
        response = Response()            
        productPage = []            # products showed in a page
        data_all = list(mongo.db.product.find({}))
        extracted = list(filter(lambda y: (no_accent_vietnamese(y['brand']).count(no_accent_vietnamese(searchedString))) or (no_accent_vietnamese(y['name']).count(no_accent_vietnamese(searchedString))) or (no_accent_vietnamese(y['groupName']).count(no_accent_vietnamese(searchedString))),data_all))
        
        # information of page      
        totalElement = len(extracted)
        totalPages = math.ceil(totalElement/numOfElement)
        first = (page==0)
        last = (page==(totalPages-1)) 
        number = page       
        start = (page)*numOfElement

        if(totalElement > start + numOfElement):
            for i in range(start, start+numOfElement, 1):
                productPage.append({
                    'id': extracted[i]['_id'],
                    'groupID': extracted[i]['groupID'],
                    'groupName': extracted[i]['groupName'],
                    'category': extracted[i]['category'],
                    'name': extracted[i]['name'],
                    'link': extracted[i]['link'],
                    'brand': extracted[i]['brand'],                
                    'imageURL': extracted[i]['imageURL'],    
                    'price': extracted[i]['price'],            
                    'description': extracted[i]['description'],                          
                    'quantity': extracted[i]['quantity'],
                    'star': extracted[i]['star']
                })
        else:
            for i in range(start, totalElement, 1):
                productPage.append({
                    'id': extracted[i]['_id'],
                    'groupID': extracted[i]['groupID'],
                    'groupName': extracted[i]['groupName'],
                    'category': extracted[i]['category'],
                    'name': extracted[i]['name'],
                    'link': extracted[i]['link'],
                    'brand': extracted[i]['brand'],                
                    'imageURL': extracted[i]['imageURL'],    
                    'price': extracted[i]['price'],            
                    'description': extracted[i]['description'],                          
                    'quantity': extracted[i]['quantity'],
                    'star': extracted[i]['star']
                })
        processed = {
            'content': productPage,
            'totalPages': totalPages,
            'totalElement': totalElement,
            'first': first,
            'last': last,
            'size': numOfElement,
            'number': number,
            'sort': ''            
        }
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
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))
    except:
        response.create(Response.ERROR)
        response.data = "Datebase connection is false."
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))

    return output
    
def update_product(mongo):
    try:
        response = Response()
        params = json.loads(request.data)
        mongo.db.product.update({'product_id': params['product_id']}, {'$set': params})
        response.create(Response.SUCCESS)
        response.data = 'Product was updated.'
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))
    except:
        response.create(Response.ERROR)
        response.data = 'Datebase connection is false.'
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))

    return output

def delete_product(mongo):
    try:
        response = Response()
        params = json.loads(request.data)
        mongo.db.product.remove({'product_id': params['product_id']})
        response.create(Response.SUCCESS)
        response.data = 'Product was deleted.'
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))
    except:
        response.create(Response.ERROR)
        response.data = 'Datebase connection is false.'
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))

    return output