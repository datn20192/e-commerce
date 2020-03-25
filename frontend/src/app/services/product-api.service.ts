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

      getProductByID(id): Observable<any>{
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

      deleteProduct(id):Observable<any>{
        var params = {product_id: id};
        return this.http.post<any>(`${API_URL}/api/delete_product`, params)
        .pipe(
          catchError(ProductsApiService._handleError)
        );
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
          catchError(ProductsApiService._handleError)
        );
      }

      updateProduct(id, groupID, groupName, category, name, link, brand, imageURL, price, description, quantity, star):Observable<any>{
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
        return this.http.post<any>(`${API_URL}/api/update_product`, params)
        .pipe(
          catchError(ProductsApiService._handleError)
        );
      }

    }