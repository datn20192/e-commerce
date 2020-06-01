from flask import Flask, jsonify, request
from bson import json_util
from bson.objectid import ObjectId
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
    try:
        response = Response()
        extracted= mongo.db.product.find_one_or_404({'_id': ObjectId(id)})
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
        response.create(Response.SUCCESS)
        response.data = processed              
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))
    except:
        response.create(Response.ERROR)
        response.data = "Datebase connection is false."
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))

    return output    


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

#-------------------------- Split product list by page ----------------------------#
def split_product_by_page(productList, page, numOfElement):
    try: 
        productPage = []            # products showed in a page
        # information of page      
        totalElement = len(productList)
        totalPages = math.ceil(totalElement/numOfElement)
        first = True if (page==0) else False
        last = True if (page==(totalPages-1)) else False
        number = page 

        start = (page)*numOfElement
        ending = totalElement if (last==True) else (start + numOfElement)
        for i in range(start, ending, 1):
            productPage.append({
                'id': str(productList[i]['_id']),
                'groupID': productList[i]['groupID'],
                'groupName': productList[i]['groupName'],
                'category': productList[i]['category'],
                'name': productList[i]['name'],
                'link': productList[i]['link'],
                'brand': productList[i]['brand'],                
                'imageURL': productList[i]['imageURL'],    
                'price': productList[i]['price'],            
                'description': productList[i]['description'],                          
                'quantity': productList[i]['quantity'],
                'star': productList[i]['star']
            })
        
        return {
            'content': productPage,
            'totalPages': totalPages,
            'totalElement': totalElement,
            'first': first,
            'last': last,
            'size': numOfElement,
            'number': number,
            'sort': ''            
        } 
    except Exception as e:
        print(e)
def get_product_by_category_page(mongo, category, page, numOfElement):
    try:              
        page = int(page)
        numOfElement = int(numOfElement)  
        response = Response()            
        extracted = list(mongo.db.product.find({'category': category}))
                
        processed = split_product_by_page(extracted, page, numOfElement)
        response.create(Response.SUCCESS)
        response.data = processed              
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False)) 
    except Exception as e:
        print(e)
        response.create(Response.ERROR)
        response.data = "Datebase connection is false."
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))
        
    return output

def get_product_by_filter(mongo, searchedString, page, numOfElement):
    try:      
        page = int(page)
        numOfElement = int(numOfElement)  
        response = Response()            
        data_all = list(mongo.db.product.find({}))
        extracted = list(filter(lambda y: (no_accent_vietnamese(y['brand']).count(no_accent_vietnamese(searchedString))) or (no_accent_vietnamese(y['name']).count(no_accent_vietnamese(searchedString))) or (no_accent_vietnamese(y['groupName']).count(no_accent_vietnamese(searchedString))),data_all))
               
        processed = split_product_by_page(extracted, page, numOfElement)
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
        # Modify 'id' field to '_id' field
        params['_id'] = ObjectId(params['id'])
        params.pop('id')

        mongo.db.product.update({'_id': params['_id']}, {'$set': params})
        response.create(Response.SUCCESS)
        response.data = 'Product was updated.'
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))
    except Exception as e:
        print(e)
        response.create(Response.ERROR)
        response.data = 'Datebase connection is false.'
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))

    return output

def delete_product(mongo):
    try:
        response = Response()
        params = json.loads(request.data)
        mongo.db.product.remove({'_id': ObjectId(params['id'])})
        response.create(Response.SUCCESS)
        response.data = 'Product was deleted.'
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))
    except Exception as e:
        print(e)
        response.create(Response.ERROR)
        response.data = 'Datebase connection is false.'
        output = jsonify(json_util.dumps(response.__dict__, ensure_ascii=False))

    return output