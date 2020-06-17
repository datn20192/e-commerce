from flask import Flask
from flask import request
from flask_pymongo import PyMongo
from flask_cors import CORS
from config import Response
from api import bill_api, productCategory_api, product_api, typeOfPayment_api, customer_api, shipper_api

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

@app.route('/api/admin/update_product', methods=['POST'])
def update_product():
    return product_api.update_product(mongo)

@app.route('/api/admin/delete_product', methods=['POST'])
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

#------------------- Bill -------------------------#
@app.route('/api/bill/statistics/year=<string:year>', methods = ['GET'])
def get_bill_by_year(year):
    month= request.args.get('month')
    day = request.args.get('day')
    
    if month is None:
        return bill_api.get_bill_by_year(mongo,year)
    else:
        if day is None:
            return bill_api.get_bill_by_year_month(mongo,year,month)
        else:
            return bill_api.get_bill_by_day(mongo,year,month,day)
@app.route('/api/bill/statistics/allyear', methods = ['GET'])
def get_bill_by_all_year():
    return bill_api.get_bill_by_all_year(mongo)

@app.route('/api/bill/add_bill', methods = ['POST'])
def add_bill():
    return customer_api.add_bill(mongo)

@app.route('/api/bill/submitOnlinePayment', methods = ['POST'])
def submit_online_payment():
    return customer_api.submit_online_payment(mongo)

# Get unpaid bill
@app.route('/api/bill/unPaid/<string:typeOfPayment>' , methods = ['GET'])
def get_unpaid_bill(typeOfPayment):
    return bill_api.getUnPaidBill(mongo, typeOfPayment)
# Get number of unpaid bills
@app.route('/api/bill/unPaid/length')
def get_number_of_unpaid_bills():
    return bill_api.get_number_of_unpaid_bills(mongo)

# Submit the delivery of shipper
@app.route('/api/bill/submitDelivery', methods = ['POST'])
def submit_delivery():
    return shipper_api.submit_delivery(mongo)