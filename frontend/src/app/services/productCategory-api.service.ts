import {Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs/';
import {catchError} from 'rxjs/operators';
import { API_URL} from '../../environments/environment';
import { ProductCategory, CategoryChild } from '../models/productCategory.model';

@Injectable()
export class ProductCategoryServiceAPI {
    constructor(private http: HttpClient) {}
    private static _handleError(err: HttpErrorResponse | any) {
        return throwError(err.message || 'Error: Unable to complete request.');
    }

    // GET list of productCategory, future events
    getProductCategories(): Observable<any> {
        return this.http.get<ProductCategory[]>(`${API_URL}/api/productCategories`)
        .pipe(
            catchError(ProductCategoryServiceAPI._handleError)
        );
    }

    getProductCategoriesNonGroup(): Observable<any> {
        return this.http.get<CategoryChild[]>(`${API_URL}/api/productCategories/nonGroup`)
        .pipe(
            catchError(ProductCategoryServiceAPI._handleError)
        );
    }
    
    deleteProductCategoy(id): Observable<any> {
        var params = {category_id: id};
        return this.http.post<any>(`${API_URL}/api/delete_productCategory`, params)
        .pipe(
            catchError(ProductCategoryServiceAPI._handleError)
        );
    }

    addProductCategory(id, name, quantity): Observable<any> {
        var params = {
            category_id: id,
            name: name,
            quantity: quantity
        };
        return this.http.post<any>(`${API_URL}/api/add_productCategory`, params)
        .pipe(
            catchError(ProductCategoryServiceAPI._handleError)
        );
    }

    updateProductCategory(id, name, quantity): Observable<any> {
        var params = {
            category_id: id,
            name: name,
            quantity: quantity
        }
        return this.http.post<any>(`${API_URL}/api/update_productCategory`, params)
        .pipe(
            catchError(ProductCategoryServiceAPI._handleError)
        );
    }   
    
}