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
      getProducts(): Observable<any> {
        return this.http.get<Product[]>(`${API_URL}/api/products`)
        .pipe(
            catchError(ProductsApiService._handleError)
        );
      }

      getProductByID(id:string): Observable<any>{
        return this.http.get<any>(`${API_URL}/api/products/`+id)
        .pipe(
          catchError(ProductsApiService._handleError)
        )
      }

      getProductByCategory(category): Observable<any> {
        return this.http.get<any>(`${API_URL}/api/products/category/${category}`)
        .pipe(
          catchError(ProductsApiService._handleError)
        )
      }

      getProductByCategoryPage(category, page, numberOfElement): Observable<any> {        
        return this.http.get<any>(`${API_URL}/api/products/category/${category}?page=${page}&num=${numberOfElement}`)
        .pipe(
          catchError(ProductsApiService._handleError)
        )
      }
      getProductByFilter(searchedString, page, numberOfElement): Observable<any> {      
        return this.http.get<any>(`${API_URL}/api/products/search/${searchedString.trim()}?page=${page}&num=${numberOfElement}`)
        .pipe(
          catchError(ProductsApiService._handleError)
        )
      }      

    }