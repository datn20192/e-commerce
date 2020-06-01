import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { API_URL } from '../../../../environments/environment';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private yearSubject = new BehaviorSubject(0);
  currentYear = this.yearSubject.asObservable();

  private monthSubject = new BehaviorSubject(0);
  currentMonth = this.monthSubject.asObservable();


  years = [{value: '2018', index: 0}, {value: '2019', index: 1},{value: '2020', index: 2},];
  days: number;

  constructor(private http: HttpClient) { }
  private static _handleError(err: HttpErrorResponse | any) {
    return throwError(err.message || 'Error: Unable to complete request.');
  }

  changeYear(year) {
    this.yearSubject.next(year);
  }
  changeMonth(month) {
    this.monthSubject.next(month);
  }

  //Check days in the month
  genDaysByMonthAndYear(year: number, month: number) {
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12: {
        this.days = 31;
        break;
      }
      case 2: {
        this.days = (this.leapYear(year)) ? 29 : 28;
        break;
      }
      default: {
        this.days = 30;
        break;
      }
    }
  }
  //generate array number 0 -> (n-1)
  arrayOne(n: number): number[] {
    return Array(n);
  }
  //Check leap year
  leapYear(year: number) {
    return (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0));
  }
  //call api to GET data bill 
  getBillByYear(year): Observable<any>{
    return this.http.get<any>(`${API_URL}/api/bill/statistics/year=${year}`)
    .pipe(
      catchError(DashboardService._handleError)
    );
  }
  getBillByAllYear(): Observable<any>{
    return this.http.get<any>(`${API_URL}/api/bill/statistics/allyear`)
    .pipe(
      catchError(DashboardService._handleError)
    );
  }
  getBillByYearMonth(year,month): Observable<any>{
    return this.http.get<any>(`${API_URL}/api/bill/statistics/year=${year}?month=${month}`)
    .pipe(
      catchError(DashboardService._handleError)
    );
  }
  getBillByDay(year,month,day): Observable<any>{
    return this.http.get<any>(`${API_URL}/api/bill/statistics/year=${year}?month=${month}&day=${day}`)
    .pipe(
      catchError(DashboardService._handleError)
    );
  }
  getAllBill(): Observable<any>{
    return this.http.get<any>(`${API_URL}/api/bill/statistics/all-paid-bill`)
    .pipe(
      catchError(DashboardService._handleError)
    );
  }
}
