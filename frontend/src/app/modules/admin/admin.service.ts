import {Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs/';
import {catchError} from 'rxjs/operators';
import { API_URL} from '../../../environments/environment';
import { Product } from '../../models/product.model';

@Injectable({
    providedIn: 'root',
})
export class AdminApiService { 
    constructor(private http: HttpClient) {}
    private static _handleError(err: HttpErrorResponse | any) {
        return throwError(err.message || 'Error: Unable to complete request.');
    }

    addProduct(id, groupID, groupName, category, name, link, brand, imageURL, price, description, quantity, star):Observable<any>{
        var params = {
          id: id,
          groupID: groupID,
          groupName: groupName,
          category: category,
          name: name,
          link: link,
          brand: brand,
          imageURL: imageURL,
          price: price,
          description: description,
          quantity: quantity,
          star: star                  
        };
        return this.http.post<any>(`${API_URL}/api/add_product`, params)
        .pipe(
          catchError(AdminApiService._handleError)
        );
    }

    updateProduct(product:Product):Observable<any>{
        var params = {
          id: product.id,
          groupID: product.groupID,
          groupName: product.groupName,
          category: product.category,
          name: product.name,
          link: product.link,
          brand: product.brand,
          imageURL: product.imageURL,
          price: product.price,
          description: product.description,
          quantity: product.quantity,
          star: product.star
        };
        return this.http.post<any>(`${API_URL}/api/admin/update_product`, params)
        .pipe(
          catchError(AdminApiService._handleError)
        );
    }

    deleteProduct(id:string):Observable<any>{
        var params = {id: id};
        return this.http.post<any>(`${API_URL}/api/admin/delete_product`, params)
        .pipe(
          catchError(AdminApiService._handleError)
        );
    }

}