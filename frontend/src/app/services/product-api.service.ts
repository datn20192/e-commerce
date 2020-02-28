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
    }