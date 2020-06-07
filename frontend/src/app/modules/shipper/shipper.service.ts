import {Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs/';
import {catchError} from 'rxjs/operators';
import { API_URL} from '../../../environments/environment';
import { Bill } from '../../models/bill.model';

@Injectable({
    providedIn: 'root',
})
export class ShipperApiService { 
    constructor(private http: HttpClient) {}
    private static _handleError(err: HttpErrorResponse | any) {
        return throwError(err.message || 'Error: Unable to complete request.');
    }    

    

}