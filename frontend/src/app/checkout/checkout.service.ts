import {Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs/';
import {catchError} from 'rxjs/operators';

import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { API_URL} from '../../environments/environment';

import { UserInfor, Address } from '../models/user.model';
import { TypeOfPayment } from '../models/bill.model';

@Injectable({
    providedIn: 'root',
})
export class CheckoutApiService {
    constructor(
        private http: HttpClient,
        private afs: AngularFirestore,       
    ) {}
    private static _handleError(err: HttpErrorResponse | any) {
        return throwError(err.message || 'Error: Unable to complete request.');
    }    

    // Get all of payment types
    getAllTypeOfPayment(): Observable<any> {
        return this.http.get<TypeOfPayment>(`${API_URL}/api/payment/types`)
        .pipe(
            catchError(CheckoutApiService._handleError)
        )
    }

    //----------- API for query shipping information from firebase ------------//
    // Get information of user 
    getUserInfor(): Observable<any> {
        const userUID = JSON.parse(localStorage.getItem('user')).uid;
        return this.afs.doc(`users/${userUID}`).snapshotChanges();
    }

    // Add information for user 
    addUserInfor(userInfor: UserInfor) {        
        const userUID = JSON.parse(localStorage.getItem('user')).uid;
        const user: AngularFirestoreDocument<any> = this.afs.doc(`users/${userUID}`);
        user.set({"infor": JSON.parse(JSON.stringify(userInfor))}, {merge: true});
    }
}