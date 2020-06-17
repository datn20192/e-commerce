import {Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs/';
import {catchError} from 'rxjs/operators';
import { API_URL} from '../../environments/environment';
import { Bill } from '../models/bill.model';

@Injectable({
    providedIn: 'root',
})
export class BillApiService { 

    constructor(private http: HttpClient) {}
    private static _handleError(err: HttpErrorResponse | any) {
        return throwError(err.message || 'Error: Unable to complete request.');
    }    

    getUnPaidBill(typeOfPayment: string): Observable<any> {
        return this.http.get<any>(`${API_URL}/api/bill/unPaid/${typeOfPayment}`)
        .pipe(
            catchError(BillApiService._handleError)
        )
    }

    //-------------------------- Count the number of un paid bill ---------------------//
    getNumberOfUnPaidBill(): Observable<any> {
        return this.http.get<any>(`${API_URL}/api/bill/unPaid/length`)
        .pipe(
            catchError(BillApiService._handleError)
        )
    }

    private countUnPaidBill = new BehaviorSubject(0);

    currentNumberOfUnPaidBill = this.countUnPaidBill.asObservable();

    changeCountUnPaidBill(count: number) {
        this.countUnPaidBill.next(count);
    }

}