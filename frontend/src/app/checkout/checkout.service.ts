import {Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs/';
import {catchError} from 'rxjs/operators';
import { API_URL} from '../../environments/environment';

import { Customer } from '../models/user.model';

@Injectable({
    providedIn: 'root',
})
export class CheckoutApiService {
    constructor(private http: HttpClient) {}
    private static _handleError(err: HttpErrorResponse | any) {
        return throwError(err.message || 'Error: Unable to complete request.');
    }

    // Get customer by account
    getCustomerByAccount(account): Observable<any> {       
        return this.http.get<Customer> (`${API_URL}/api/customer/${account}`)
        .pipe (
            catchError(CheckoutApiService._handleError)
        )
    }
}