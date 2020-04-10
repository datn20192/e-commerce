import {Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs/';
import {catchError} from 'rxjs/operators';
import { API_URL} from '../../../environments/environment';
import { ProductCategory, CategoryChild } from '../../models/productCategory.model';

@Injectable({
    providedIn: 'root',
})
export class HomeApiService { 
    constructor(private http: HttpClient) {}
    private static _handleError(err: HttpErrorResponse | any) {
        return throwError(err.message || 'Error: Unable to complete request.');
    }
    
    // get product
    getProductByCategory(category): Observable<any> {
        return this.http.get<any>(`${API_URL}/api/products/category/${category}`)
        .pipe(
          catchError(HomeApiService._handleError)
        )
      }

    getProductByCategoryPage(category, page, numberOfElement): Observable<any> {        
      return this.http.get<any>(`${API_URL}/api/products/category/${category}?page=${page}&num=${numberOfElement}`)
      .pipe(
        catchError(HomeApiService._handleError)
      )
    }

    // get category
    // GET list of productCategory, future events
    getProductCategories(): Observable<any> {
        return this.http.get<ProductCategory[]>(`${API_URL}/api/productCategories`)
        .pipe(
            catchError(HomeApiService._handleError)
        );
    }

    getProductCategoriesNonGroup(): Observable<any> {
        return this.http.get<CategoryChild[]>(`${API_URL}/api/productCategories/nonGroup`)
        .pipe(
            catchError(HomeApiService._handleError)
        );
    }
}