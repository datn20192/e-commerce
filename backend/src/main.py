from flask import Flask
from flask import request
from flask_pymongo import PyMongo
from flask_cors import CORS
from .config import Response
from .api import product_api, productCategory_api, typeOfPayment_api

app = Flask(__name__)

CORS(app)

app.config['MONGO_URI'] = "mongodb+srv://datn20192:admin@e-commerce-vi6db.mongodb.net/eCommerceDB?retryWrites=true&w=majority"

mongo = PyMongo(app)

#--------------- product API ----------------------#
@app.route('/api/products', methods = ['GET'])
def get_all_products():
    return product_api.get_all_products(mongo)

@app.route('/api/products/<string:id>', methods = ['GET'])
def get_product_byID(id):
    return product_api.get_product_byID(mongo, id)

@app.route('/api/products/category/<string:category>', methods = ['GET'])
def get_product_by_category(category):
    page = request.args.get("page")
    numOfElement = request.args.get("num")
    if page is None and numOfElement is None:
        return product_api.get_product_by_category(mongo, category)
    else:
        return product_api.get_product_by_category_page(mongo, category, page, numOfElement)      
@app.route('/api/products/search/<string:searchedString>', methods = ['GET'])
def get_product_by_filter(searchedString):
    page = request.args.get("page")
    numOfElement = request.args.get("num")
    if page is None and numOfElement is None:
        return []
    else:
        return product_api.get_product_by_filter(mongo, searchedString, page, numOfElement)     
@app.route('/api/add_product', methods=['POST'])
def add_product():
    return product_api.add_product(mongo)

@app.route('/api/update_product', methods=['POST'])
def update_product():
    return product_api.update_product(mongo)

@app.route('/api/delete_product', methods=['POST'])
def delete_product():
    return product_api.delete_product(mongo)

#--------------- product category API ----------------------#
@app.route('/api/productCategories', methods = ['GET'])
def productCategoris():
    return productCategory_api.get_all_categories(mongo)  

@app.route('/api/productCategories/nonGroup', methods = ['GET'])
def productCategoriesNonGroup():
    return productCategory_api.get_all_categories_non_group(mongo)

@app.route('/api/add_productCategory', methods=['POST'])
def add_productCategory():
    return productCategory_api.add_category(mongo)

@app.route('/api/update_productCategory', methods=['POST'])
def update_productCategory():
    return productCategory_api.update_category(mongo)

@app.route('/api/delete_productCategory', methods=['POST'])
def delete_productCategory():
    return productCategory_api.delete_category(mongo)


#--------------- "type of payment" api --------------#
@app.route('/api/payment/types', methods = ['GET'])
def get_all_type_of_payment():
    return typeOfPayment_api.get_all_type_of_payment(mongo)