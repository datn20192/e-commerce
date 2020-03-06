import {Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs/';
import {catchError} from 'rxjs/operators';
import { API_URL} from '../../environments/environment';
import { Product} from '../models/product.model';

@Injectable()
export class ProductsApiService {
    constructor(private http: HttpClient) {}
    private static _handleError(err: HttpErrorResponse | any) {
        return throwError(err.message || 'Error: Unable to complete request.');
      }
    
      // GET list of public, future events
      getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`${API_URL}/products`)
        .pipe(
            catchError(ProductsApiService._handleError)
        );
      }

      getProductByID(id): Observable<any>{
        return this.http.get<any>(`${API_URL}/products/`+id)
        .pipe(
          catchError(ProductsApiService._handleError)
        )
      }

      deleteProduct(id):Observable<any>{
        var params = {id: id};
        return this.http.post<any>(`${API_URL}/api/delete_product`, params)
        .pipe(
          catchError(ProductsApiService._handleError)
        );
      }

      addProduct(id, name, price, quantity, category, description, imageURL):Observable<any>{
        var params = {
          product_id: id,
          name: name,
          price: price,
          quantity: quantity,
          category: category,
          description: description,
          imageURL: imageURL
        };
        return this.http.post<any>(`${API_URL}/api/add_product`, params)
        .pipe(
          catchError(ProductsApiService._handleError)
        );
      }

      updateProduct(id, name, price, category, description, imageURL):Observable<any>{
        var params = {
          product_id: id,
          name: name,
          price: price,
          category: category,
          description: description,
          imageURL: imageURL
        };
        return this.http.post<any>('api/update_product', params)
        .pipe(
          catchError(ProductsApiService._handleError)
        );
      }
    }