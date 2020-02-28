(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"container-fluid mt-5\">\n  <router-outlet></router-outlet>\n  \n  <footer class=\"ml-4\">\n      <hr>\n      <div class=\"row\">\n          <div class=\"col-md-6\">\n          </div>\n          <div class=\"col-md-6 text-md-right\">\n              <a href=\"#\" class=\"text-dark\">Terms of Use</a> \n              <span class=\"text-muted mx-2\">|</span> \n              <a href=\"#\" class=\"text-dark\">Privacy Policy</a>\n          </div>\n      </div>\n  </footer>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>dashboard works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forgot-password/forgot-password.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/forgot-password/forgot-password.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>forgot-password works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-default fixed-top navbar-expand-lg navbar-light\">\n    <div class=\"navbar-header d-flex col\">\n        <a class=\"navbar-brand\" routerLink=\"/\"><b>E-Commerce</b></a>  \t\t\n        <button type=\"button\" data-target=\"#navbarCollapse\" data-toggle=\"collapse\" class=\"navbar-toggle navbar-toggler ml-auto\">\n            <span class=\"navbar-toggler-icon\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n        </button>\n    </div>\n    \n    <!-- Collection of nav links, forms, and other content for toggling -->\n    <div id=\"navbarCollapse\" class=\"collapse navbar-collapse justify-content-start\">\n        <!--  \n            <ul class=\"nav navbar-nav ml-auto\">\n                <li class=\"nav-item\"><a routerLink=\"/\" class=\"nav-link\">Home</a></li>\t\t\n                \n            </ul>\n           <form [formGroup]=\"formSearch\" class=\"navbar-form form-inline\">\n                <div class=\"input-group search-box\">\t\t\t\t\t\t\t\t\n                    <input type=\"text\" id=\"search\" class=\"form-control\" placeholder=\"Search here...\">\n                    <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\n                </div>\n            </form> -->\n            <ul class=\"nav navbar-nav navbar-right ml-auto\" *ngIf=\"!(auth.userData) && !(auth.isLoggedIn)\">\t\t\t\n                <li class=\"nav-item\">\n                    <a data-toggle=\"dropdown\" class=\"nav-link dropdown-toggle\" href=\"#\">Login</a>\n                    <ul class=\"dropdown-menu form-wrapper\">\t<li><app-signin></app-signin></li></ul>\n                </li>\n                <li class=\"nav-item\">\n                    <a href=\"#\" data-toggle=\"dropdown\" class=\"btn btn-primary dropdown-toggle get-started-btn mt-1 mb-1\">Sign up</a>\n                    <ul class=\"dropdown-menu form-wrapper\"><li><app-signup></app-signup></li></ul>\n                </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right ml-auto\" *ngIf=\"(auth.userData) && (auth.isLoggedIn)\">\n                <li class=\"nav-item dropdown\">\n                    <a data-toggle=\"dropdown\" class=\"nav-link dropdown-toggle\" aria-haspopup=\"true\" aria-expanded=\"false\" href=\"#\">\n                            <img src=\"{{ !auth.userData.photoURL ? auth.defaultURL : auth.userData.photoURL }}\" width=\"40\" height=\"40\" class=\"rounded-circle\">\n                        <b>{{auth.userData.displayName === null ? auth.userData.email.split('@')[0] : auth.userData.displayName }}</b></a>\n                    <ul class=\"dropdown-menu\">\t\t\t\t\t\n                        <li><a routerLink=\"/image/list\" class=\"dropdown-item\"><i class=\"fa fa-camera-retro\" aria-hidden=\"true\"></i> Mes photos</a></li>\n                        <li><button (click)=\"auth.signOut()\" class=\"dropdown-item btn btn-important\"><i class=\"fa fa-lock\" aria-hidden=\"true\"></i> Logout</button></li>\n                    </ul>\n                </li>\n            </ul>\n        </div>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-found/not-found.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-found/not-found.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br><div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-8 offset-md-2\">           \n            <h1><strong>404</strong> - Page Not Found</h1>\n            <a routerLink=\"/\" class=\"btn btn-primary\"><i class=\"fa fa-home\"></i> Home</a>\n        </div>\n        <div class=\"col-4\"></div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/signin/signin.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/signin/signin.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"formSignin\" >\n    <p class=\"hint-text\">Sign in with your social media account</p>\n    <div class=\"form-group social-btn clearfix\">\n        <button type=\"button\"  class=\"btn btn-danger pull-left\" (click)=\"authentification.GoogleAuth()\"><i class=\"fa fa-google-plus\"></i> Google</button>\n        <button type=\"button\"  class=\"btn btn-info pull-right\"  (click)=\"authentification.FacebookAuth()\"><i class=\"fa fa-facebook\"></i> Facebook</button>\n    </div>\n    <div class=\"or-seperator\"><b>or</b></div>\n    <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Username\" formControlName=\"email\">\n    </div>\n    <div class=\"form-group\">\n        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\">\n    </div>\n    <input type=\"submit\" class=\"btn btn-primary btn-block\" value=\"Sign in\" (click)=\"onSubmit(formSignin)\">\n    <div class=\"form-footer\">\n        <a href=\"/forgot-password\">Forgot Your password?</a>\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/signup/signup.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/signup/signup.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"formSignup\" >\n    <p class=\"hint-text\">Fill in this form to create your account!</p>\n    <div class=\"form-group\">\n        <input type=\"email\" class=\"form-control\" placeholder=\"Email\" formControlName=\"username\">\n        <div class=\"text-danger\" *ngIf=\"isSubmitted && f.username.errors?.required\">Email is required</div>\n        <div class=\"text-danger\" *ngIf=\"isSubmitted && f.username.errors?.email\">Email must be a valid email address</div>\n    </div>\n    <div class=\"form-group\">\n        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\">\n        <div class=\"text-danger\" *ngIf=\"isSubmitted && f.password.errors?.required\">\n                <i class=\"material-icons\">cancel</i> Password is required\n        </div>\n        <label class=\"col text-danger\" *ngIf=\"formSignup.controls['password'].hasError('minlength')\">\n                <i class=\"material-icons\">cancel</i>  Must be at least 8 characters!\n        </label>\n        <label class=\"col text-danger\" *ngIf=\"formSignup.controls['password'].hasError('hasNumber')\">\n                <i class=\"material-icons\">cancel</i>  Must contain at least 1 number! \n        </label>\n        <label class=\"col text-danger\" *ngIf=\"formSignup.controls['password'].hasError('hasCapitalCase')\">\n                <i class=\"material-icons\">cancel</i> Must contain at least 1 in Capital Case!\n        </label>\n        <label class=\"col text-danger\" *ngIf=\"formSignup.controls['password'].hasError('hasSmallCase')\">\n                <i class=\"material-icons\">cancel</i> Must contain at least 1 Letter in Small Case!\n        </label>\n        <label class=\"col text-danger\" *ngIf=\"formSignup.controls['password'].hasError('hasSpecialCharacters')\">\n                <i class=\"material-icons\">cancel</i> Must contain at least 1 Special Character!\n        </label>\n    </div>\n    <div class=\"form-group\">\n        <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" formControlName=\"confirm\">       \n        <label class=\"col text-danger\" *ngIf=\"formSignup.controls['confirm'].hasError('NoPassswordMatch') && formSignup.value['password'] \">\n                <i class=\"material-icons\">cancel</i> Password do not match \n        </label>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"checkbox-inline\"><input type=\"checkbox\" formControlName=\"terms\"> I accept the <a href=\"#\">Terms &amp; Conditions</a></label>\n        <div class=\"text-danger\" *ngIf=\"isSubmitted && f.terms.errors?.required\">You must accept terms and conditions</div>\n    </div>\n    <input type=\"submit\" class=\"btn btn-primary btn-block\" value=\"Sign up\" (click)=\"onSubmit()\">\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/verify-email-address/verify-email-address.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/verify-email-address/verify-email-address.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>verify-email-address works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/images/image-list/image-list.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/images/image-list/image-list.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" *ngIf=\"imageList\">\n    <div class=\"row\" *ngFor=\"let i of rowIndexArray\">\n        <div class=\"col-md-4 mb-1\">\n            <div class=\"imagebox \" *ngIf=\"i==0\">\n                <a routerLink=\"/image/upload\">\n                <img src=\"/assets/img/image.png\" class=\"img-fluid\" style=\"width: 269px; height: 202px;padding: 0px;\">\n                <span class=\"imagebox-desc\">Insert New Image</span></a>\n            </div>\n            <div class=\"imagebox\" *ngIf=\"i!=0\">\n                <img [src]=\"imageList[3*i-1].imageUrl\" class=\"img-fluid\" style=\"width: 269px; height: 202px;padding: 0px;\">\n                <span class=\"imagebox-desc\">{{imageList[3*i-1].caption}}</span>\n            </div>\n        </div>\n        <div *ngIf=\"imageList[3*i]\"  class=\"col-md-4 mb-1\">\n            <div class=\"imagebox \">\n                <img [src]=\"imageList[3*i].imageUrl\" class=\"img-fluid\" style=\"width: 269px; height: 202px;padding: 0px;\">\n                <span class=\"imagebox-desc\">{{imageList[3*i].caption}}</span>\n            </div>\n        </div>\n        <div *ngIf=\"imageList[3*i+1]\"  class=\"col-md-4 mb-1\">\n            <div class=\"imagebox \">\n                <img [src]=\"imageList[3*i+1].imageUrl\" class=\"img-fluid\" style=\"width: 269px; height: 202px;padding: 0px;\">\n                <span class=\"imagebox-desc\">{{imageList[3*i+1].caption}}</span>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/images/image/image.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/images/image/image.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\" style=\"width: 25rem;\">\n    <div class=\"card-body\">\n        <form [formGroup]=\"formTemplate\" (submit)=\"onSubmit(formTemplate)\">\n            <div class=\"text-center\">\n                <img [src]=\"imgSrc\" width=\"350px\" height=\"250px\" (click)=\"fileUploader.click()\">               \n            </div>\n            \n            <div class=\"form-group\">\n                <label for=\"\">Select file to upload</label>\n                <input type=\"file\" accept=\"image/*\" class=\"form-control\" formControlName=\"imageUrl\" (change)=\"showPreview($event)\" #fileUploader>\n                <div class=\"text-danger\" *ngIf=\"isSubmitted && formControls.imageUrl.errors?.required\">Ce champ est obligatoire</div>\n            </div>\n            <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Titre\" formControlName=\"caption\">\n                <div class=\"text-danger\" *ngIf=\"isSubmitted && formControls.caption.errors?.required\">Ce champ est obligatoire</div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <select formControlName=\"category\" class=\"form-control\">\n                            <option value=\"Appartement\" selected>Appartement</option>\n                            <option value=\"Laptop\">Laptop</option>\n                            <option value=\"Desktop\">Desktop</option>\n                            <option value=\"Vehicule\">Vehicule</option>\n                        </select>                        \n                    </div>\n                    <div class=\"col-6\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Prix du bien\" formControlName=\"prix\">\n                        <div class=\"text-danger\" *ngIf=\"isSubmitted && formControls.prix.errors?.required\">Ce champ est obligatoire</div>\n                    </div>\n                </div>                \n            </div>\n            <div class=\"form-group\">\n                <textarea class=\"form-control\" placeholder=\"Faites la description du bien\" formControlName=\"description\" rows=\"3\" cols=\"30\"></textarea>\n                <div class=\"text-danger\" *ngIf=\"isSubmitted && formControls.description.errors?.required\">Ce champ est obligatoire</div>\n            </div>\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-6\">\n                    <a routerLink=\"/image/list\" class=\"btn btn-primary btn-block float-right\"><i class=\"fa fa-home\"></i> Go to Gallery</a>\n                </div>\n                <div class=\"form-group col-md-6\">\n                   <button type=\"submit\" class=\"btn btn-success btn-block float-right\"><i class=\"fa fa-save\"></i> Submit</button>\n                </div>\n            </div>\n            <div class=\"form-row\"  *ngIf=\"showProgres\">\n                <i class=\"fa fa-spin fa-spin-2x fa-4x fa-circle-o-notch fa-fw text-danger float-right\"></i>\n            </div>\n        </form>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/images/images.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/images/images.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-8 offset-md-2\">\n            <blockquote class=\"blockquote\">\n                <p class=\"mb-0 display-4\">Image Gallery</p>\n                <footer class=\"blockquote-footer\">With <cite title=\"Source Title\">Firebase  Storage</cite> and Angular 8</footer>\n            </blockquote>\n            <router-outlet></router-outlet>\n        </div>\n        <div class=\"col-4\"></div>\n</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _images_image_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/image/image.component */ "./src/app/images/image/image.component.ts");
/* harmony import */ var _images_images_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/images.component */ "./src/app/images/images.component.ts");
/* harmony import */ var _images_image_list_image_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/image-list/image-list.component */ "./src/app/images/image-list/image-list.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");







// : if request.auth != null
const routes = [
    { path: '', redirectTo: 'image/list', pathMatch: 'full' },
    { path: 'image', component: _images_images_component__WEBPACK_IMPORTED_MODULE_4__["ImagesComponent"], children: [
            { path: 'upload', component: _images_image_image_component__WEBPACK_IMPORTED_MODULE_3__["ImageComponent"] },
            { path: 'list', component: _images_image_list_image_list_component__WEBPACK_IMPORTED_MODULE_5__["ImageListComponent"] } // image/list
        ] },
    { path: 'not-found', component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"] },
    { path: '**', redirectTo: 'not-found' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ImageGalleryWithANgularAndFirebase';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _images_images_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/images.component */ "./src/app/images/images.component.ts");
/* harmony import */ var _images_image_image_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/image/image.component */ "./src/app/images/image/image.component.ts");
/* harmony import */ var _images_image_list_image_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/image-list/image-list.component */ "./src/app/images/image-list/image-list.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/signin/signin.component */ "./src/app/components/signin/signin.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/forgot-password/forgot-password.component */ "./src/app/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_verify_email_address_verify_email_address_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/verify-email-address/verify-email-address.component */ "./src/app/components/verify-email-address/verify-email-address.component.ts");




/* Impotr AngularFire Modules */












// Firebase config



/* Auth service */




let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
            _images_images_component__WEBPACK_IMPORTED_MODULE_11__["ImagesComponent"],
            _images_image_image_component__WEBPACK_IMPORTED_MODULE_12__["ImageComponent"],
            _images_image_list_image_list_component__WEBPACK_IMPORTED_MODULE_13__["ImageListComponent"],
            _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__["NotFoundComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"],
            _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_17__["SigninComponent"],
            _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__["SignupComponent"],
            _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_20__["ForgotPasswordComponent"],
            _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_21__["DashboardComponent"],
            _components_verify_email_address_verify_email_address_component__WEBPACK_IMPORTED_MODULE_22__["VerifyEmailAddressComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].firebaseConfig),
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorageModule"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabaseModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"]
        ],
        providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_19__["AuthService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DashboardComponent);



/***/ }),

/***/ "./src/app/components/forgot-password/forgot-password.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/forgot-password/forgot-password.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/forgot-password/forgot-password.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/forgot-password/forgot-password.component.ts ***!
  \*************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor() { }
    ngOnInit() {
    }
};
ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forgot-password/forgot-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/components/forgot-password/forgot-password.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");



let HeaderComponent = class HeaderComponent {
    constructor(auth) {
        this.auth = auth;
        //  const photo = (auth.userData.photoURL === undefined) ? '/assets/img/image.png' : auth.userData.photoURL;
        //  const name = (auth.userData.displayName === undefined) ? this.auth.userData.email.split('@')[0] : auth.userData.displayName;
    }
    ngOnInit() {
    }
    signOut() {
        this.auth.signOut();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-found/not-found.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NotFoundComponent);



/***/ }),

/***/ "./src/app/components/signin/signin.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signin/signin.component.ts ***!
  \*******************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");




let SigninComponent = class SigninComponent {
    constructor(authentification) {
        this.authentification = authentification;
        this.formSignin = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/['0-9a-zA-Z']{6,}/)])
        });
    }
    ngOnInit() {
    }
    onSubmit(formValue) {
        // (click)="authentification.SignIn(email.value, password.value)"
        if (this.formSignin.valid) {
            const email = formValue.value['email'];
            const password = formValue.value['password'];
            this.authentification.SignIn(email, password);
            this.formSignin.reset();
        }
        else {
            console.error("Invalid");
        }
    }
};
SigninComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/signin/signin.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], SigninComponent);



/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_validators_custom_validators_password__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/validators/custom-validators-password */ "./src/app/validators/custom-validators-password.ts");
/* harmony import */ var src_app_validators_custom_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/validators/custom-validator */ "./src/app/validators/custom-validator.ts");






let SignupComponent = class SignupComponent {
    constructor(auth) {
        this.auth = auth;
        this.isSubmitted = false;
        this.formSignup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                src_app_validators_custom_validator__WEBPACK_IMPORTED_MODULE_5__["CustomValidator"].patternValidator(/\d/, { hasNumber: true }),
                src_app_validators_custom_validator__WEBPACK_IMPORTED_MODULE_5__["CustomValidator"].patternValidator(/[A-Z]/, { hasCapitalCase: true }),
                src_app_validators_custom_validator__WEBPACK_IMPORTED_MODULE_5__["CustomValidator"].patternValidator(/[a-z]/, { hasSmallCase: true }),
                src_app_validators_custom_validator__WEBPACK_IMPORTED_MODULE_5__["CustomValidator"].patternValidator(/[ [!@#$%^&*()_+-={``²}]/, { hasSpecialCharacters: true }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
            ])),
            confirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            terms: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue]),
        }, (formGroup) => {
            return src_app_validators_custom_validators_password__WEBPACK_IMPORTED_MODULE_4__["CustomValidatorsPassword"].passwordMatchValidator(formGroup);
        });
        this.msgError = null;
    }
    ngOnInit() {
    }
    // convenience getter for easy access to form fields
    get f() { return this.formSignup['controls']; }
    //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formSignup.value, null, 4));
    onSubmit() {
        this.isSubmitted = true;
        if (this.formSignup.valid) {
            const email = this.formSignup.value['username'];
            const password = this.formSignup.value['password'].toString();
            const confirm = this.formSignup.value['confirm'].toString();
            const terms = this.formSignup.value['terms'];
            if (password === confirm) {
                if (terms) {
                    this.auth.signUp(email, password).then(() => { alert('Đăng kí thành công'); this.isSubmitted = false; }).catch((error) => { alert(error); });
                }
                else {
                    alert('Phải chấp nhận điều khoản');
                }
            }
            else {
                alert('Mật khẩu phải trùng khớp');
            }
        }
    }
};
SignupComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/signup/signup.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], SignupComponent);



/***/ }),

/***/ "./src/app/components/verify-email-address/verify-email-address.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/verify-email-address/verify-email-address.component.ts ***!
  \***********************************************************************************/
/*! exports provided: VerifyEmailAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailAddressComponent", function() { return VerifyEmailAddressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VerifyEmailAddressComponent = class VerifyEmailAddressComponent {
    constructor() { }
    ngOnInit() {
    }
};
VerifyEmailAddressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-verify-email-address',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./verify-email-address.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/verify-email-address/verify-email-address.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], VerifyEmailAddressComponent);



/***/ }),

/***/ "./src/app/images/image-list/image-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/images/image-list/image-list.component.ts ***!
  \***********************************************************/
/*! exports provided: ImageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageListComponent", function() { return ImageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/image.service */ "./src/app/services/image.service.ts");



let ImageListComponent = class ImageListComponent {
    constructor(imageService) {
        this.imageService = imageService;
    }
    ngOnInit() {
        this.imageService.propertyDetailList.snapshotChanges().subscribe(list => {
            this.imageList = list.map(item => item.payload.val());
            this.rowIndexArray = Array.from(Array(Math.ceil((this.imageList.length + 1) / 3)).keys());
        });
    }
};
ImageListComponent.ctorParameters = () => [
    { type: src_app_services_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"] }
];
ImageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-image-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./image-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/images/image-list/image-list.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"]])
], ImageListComponent);



/***/ }),

/***/ "./src/app/images/image/image.component.ts":
/*!*************************************************!*\
  !*** ./src/app/images/image/image.component.ts ***!
  \*************************************************/
/*! exports provided: ImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComponent", function() { return ImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_image_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var src_app_models_property_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/property.model */ "./src/app/models/property.model.ts");







let ImageComponent = class ImageComponent {
    constructor(storage, imageService) {
        this.storage = storage;
        this.imageService = imageService;
        this.imgSrc = '';
        this.selectedImage = null;
        this.isSubmitted = false;
        this.pourcentage = null;
        this.showProgres = false;
        this.formTemplate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            caption: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            imageUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            prix: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    }
    ngOnInit() {
        this.resetForm();
    }
    showPreview(event) {
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].type.match(/image\/*/) == null) {
                this.imgSrc = '/assets/img/not-available.jpg';
                alert('Seules les images sont supportées');
                return;
            }
            const reader = new FileReader();
            reader.onload = (e) => this.imgSrc = e.target.result;
            reader.readAsDataURL(event.target.files[0]);
            this.selectedImage = event.target.files[0];
        }
        else {
            this.imgSrc = '/assets/img/placeholder2.png';
            this.selectedImage = null;
        }
    }
    onSubmit(formValue) {
        this.isSubmitted = true;
        if (this.formTemplate.valid) {
            const folder = formValue.value['category'];
            this.showProgres = true;
            const filePath = `${folder}/${this.selectedImage.name.split('.').splice(0, 1).join('.')}_${new Date().getTime()}`;
            const fileRef = this.storage.ref(filePath);
            const uploadTask = this.storage.upload(filePath, this.selectedImage);
            uploadTask.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => {
                fileRef.getDownloadURL().subscribe((url) => {
                    // tslint:disable-next-line: max-line-length
                    this.imageService.insertPropertyDetail(new src_app_models_property_model__WEBPACK_IMPORTED_MODULE_6__["Property"](formValue.value['caption'], formValue.value['category'], url, formValue.value['description'], formValue.value['prix']));
                    this.resetForm();
                });
            })).subscribe();
            uploadTask.percentageChanges().subscribe(pourcentage => {
                if (Math.round(pourcentage) === 100) {
                    this.showProgres = false;
                }
            }, error => {
                console.log(error);
                this.showProgres = false;
            });
        }
    }
    resetForm() {
        this.formTemplate.reset();
        this.formTemplate.setValue({
            caption: '',
            imageUrl: '',
            category: 'Appartement',
            description: '',
            prix: null
        });
        this.imgSrc = '/assets/img/placeholder2.png';
        this.selectedImage = null;
        this.isSubmitted = false;
    }
    get formControls() {
        return this.formTemplate['controls'];
    }
};
ImageComponent.ctorParameters = () => [
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] },
    { type: src_app_services_image_service__WEBPACK_IMPORTED_MODULE_5__["ImageService"] }
];
ImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-image',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./image.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/images/image/image.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"], src_app_services_image_service__WEBPACK_IMPORTED_MODULE_5__["ImageService"]])
], ImageComponent);



/***/ }),

/***/ "./src/app/images/images.component.ts":
/*!********************************************!*\
  !*** ./src/app/images/images.component.ts ***!
  \********************************************/
/*! exports provided: ImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesComponent", function() { return ImagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/image.service */ "./src/app/services/image.service.ts");



let ImagesComponent = class ImagesComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.service.getProperties();
    }
};
ImagesComponent.ctorParameters = () => [
    { type: src_app_services_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"] }
];
ImagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-images',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./images.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/images/images.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"]])
], ImagesComponent);



/***/ }),

/***/ "./src/app/models/property.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/property.model.ts ***!
  \******************************************/
/*! exports provided: Property */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Property", function() { return Property; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Property {
    constructor(caption, category, imageUrl, description, prix) {
        this.caption = caption;
        this.category = category;
        this.imageUrl = imageUrl;
        this.description = description;
        this.id = new Date().getTime().toString();
        this.createdAat = this.formaDate(new Date());
    }
    formaDate(date) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${year}-${month}-${day}`;
    }
}


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




// import { AngularFireStorage } from '@angular/fire/storage';

// import { AngularFirestoreDocument } from '@angular/fire/firestore';

let AuthService = class AuthService {
    constructor(angularFireAuth, afs, router, ngZone) {
        this.angularFireAuth = angularFireAuth;
        this.afs = afs;
        this.router = router;
        this.ngZone = ngZone;
        this.defaultURL = '/assets/img/image.png';
        this.angularFireAuth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
                JSON.parse(localStorage.getItem('user'));
            }
            else {
                localStorage.setItem('user', '');
                // JSON.parse(localStorage.getItem('user'));
            }
        });
    }
    /* Sign up*/
    signUp(email, password) {
        /* this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password).then(
          resolve => {
            console.log('Successfully signed up!', resolve);
          }).catch(
            error => {
              console.error('Something is wrong', error);
            }
          ); */
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
            .then((result) => {
            /* Call the SendVerificaitonMail() function when new user sign up and returns promise */
            //  this.SendVerificationMail();
            this.SetUserData(result.user);
        }).catch((error) => {
            window.alert(error.message);
        });
    }
    /* Sign in */
    SignIn(email, password) {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
            .then((result) => {
            this.ngZone.run(() => {
                // this.router.navigate(['image', 'list']);
            });
            this.SetUserData(result.user);
        }).catch((error) => {
            window.alert(error.message);
        });
    }
    // Send email verfificaiton when new user sign up
    SendVerificationMail() {
        return this.angularFireAuth.auth.currentUser.sendEmailVerification()
            .then(() => {
            this.router.navigate(['verify-email-address']);
        });
    }
    // Reset Forggot password
    ForgotPassword(passwordResetEmail) {
        return this.angularFireAuth.auth.sendPasswordResetEmail(passwordResetEmail)
            .then(() => {
            window.alert('Password reset email sent, check your inbox.');
        }).catch((error) => {
            window.alert(error);
        });
    }
    // Returns true when user is looged in and email is verified
    get isLoggedIn() {
        let user = null;
        if (localStorage.getItem('user') !== '') {
            user = JSON.parse(localStorage.getItem('user'));
        }
        if (user !== null) {
            if (user.email !== null) {
                user.emailVerified = true;
            }
        }
        return (user !== null && user.emailVerified !== false) ? true : false;
    }
    // Sign in with Google
    GoogleAuth() {
        return this.AuthLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider());
    }
    // Sign in with Twitter
    TwitterAuth() {
        return this.AuthLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].TwitterAuthProvider());
    }
    // Sign in with Twitter
    FacebookAuth() {
        return this.AuthLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].FacebookAuthProvider());
    }
    // Auth logic to run auth providers
    AuthLogin(provider) {
        return this.angularFireAuth.auth.signInWithPopup(provider)
            .then((result) => {
            this.ngZone.run(() => {
                this.router.navigate(['image', 'list']);
            });
            this.SetUserData(result.user);
        }).catch((error) => {
            window.alert(error);
        });
    }
    SetUserData(user) {
        const userRef = this.afs.doc(`users/${user.uid}`);
        const userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified,
        };
        this.userData = userData;
        return userRef.set(userData, {
            merge: true
        });
    }
    // Sign out
    signOut() {
        return this.angularFireAuth.auth.signOut().then(() => {
            this.userData = null;
            localStorage.removeItem('user');
            // this.router.navigate(['sign-in']);
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], AuthService);



/***/ }),

/***/ "./src/app/services/image.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/image.service.ts ***!
  \*******************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");



let ImageService = class ImageService {
    constructor(firebase) {
        this.firebase = firebase;
    }
    getProperties() {
        this.propertyDetailList = this.firebase.list('properties');
    }
    insertPropertyDetail(property) {
        this.propertyDetailList.push(property);
    }
};
ImageService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
];
ImageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
], ImageService);



/***/ }),

/***/ "./src/app/validators/custom-validator.ts":
/*!************************************************!*\
  !*** ./src/app/validators/custom-validator.ts ***!
  \************************************************/
/*! exports provided: CustomValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidator", function() { return CustomValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CustomValidator {
    static patternValidator(regex, error) {
        return (control) => {
            if (!control.value) {
                // if control is empty return no error
                return null;
            }
            // test the value of the control against the regexp supplied
            const valid = regex.test(control.value);
            // if true, return no error (no error), else return error passed in the second parameter
            return valid ? null : error;
        };
    }
}


/***/ }),

/***/ "./src/app/validators/custom-validators-password.ts":
/*!**********************************************************!*\
  !*** ./src/app/validators/custom-validators-password.ts ***!
  \**********************************************************/
/*! exports provided: CustomValidatorsPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidatorsPassword", function() { return CustomValidatorsPassword; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CustomValidatorsPassword {
    static passwordMatchValidator(formGroup) {
        let valid = true;
        const password = formGroup.value['password'];
        const confirm = formGroup.value['confirm'];
        if ((password === confirm)) {
            valid = true;
            console.log('Quoi');
        }
        else {
            console.log(password + ':' + confirm);
            formGroup.controls['confirm'].setErrors({ NoPassswordMatch: true });
            valid = false;
        }
        if (valid) {
            return null;
        }
        return { passwordMatchValidator: true };
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyB413HEjhlSMT3Dd4mjkX1jA4pUiPkUxeA',
        authDomain: 'angular-image-gallery-233b5.firebaseapp.com',
        databaseURL: 'https://angular-image-gallery-233b5.firebaseio.com',
        projectId: 'angular-image-gallery-233b5',
        storageBucket: 'angular-image-gallery-233b5.appspot.com',
        messagingSenderId: '948173677148',
        appId: '1:948173677148:web:0c4771dde739ae9b'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dung/item/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map