import {Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs/';
import {catchError} from 'rxjs/operators';
import { API_URL} from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ShipperApiService { 
    constructor(private http: HttpClient) {}
    private static _handleError(err: HttpErrorResponse | any) {
        return throwError(err.message || 'Error: Unable to complete request.');
    }    

    submitDelivery(uid: string, billID: string): Observable<any> {
        var params = {
            uid: uid,
            billID: billID
        };
        return this.http.post<any>(`${API_URL}/api/bill/submitDelivery`, params)
        .pipe(
            catchError(ShipperApiService._handleError)
        );
    }

}