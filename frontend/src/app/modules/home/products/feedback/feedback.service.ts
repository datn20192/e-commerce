import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { firestore } from 'firebase/app';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Observable, combineLatest, of, Subscription } from 'rxjs';
import { AuthService } from '../../../../services/auth.service';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { StarVote } from './star.directive';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { API_URL } from '../../../../../environments/environment.prod';
import { ProductCategoryServiceAPI } from '../../../../services/productCategory-api.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  value5s: number; // draw progress bar
  value4s: number; // draw progress bar
  value3s: number; // draw progress bar
  value2s: number; // draw progress bar
  value1s: number; // draw progress bar

  constructor(
    private afs: AngularFirestore,
    private http: HttpClient
  ) { }
  private static _handleError(err: HttpErrorResponse | any) {
    return throwError(err.message || 'Error: Unable to complete request.');
  }
  feedbackData: any[] = [];
  totalRate: any = 0;
  feedbackRef: AngularFirestoreDocument<any>;
  fbRefSubs: Subscription;
  updateStarSubs: Subscription;
  loadFeedback(product_id): Observable<any> {

    this.feedbackData = [];
    this.totalRate = 0;
    this.value5s = 0; // draw progress bar
    this.value4s = 0; // draw progress bar
    this.value3s = 0; // draw progress bar
    this.value2s = 0; // draw progress bar
    this.value1s = 0; // draw progress bar
    this.feedbackRef = this.afs.doc(`feedbacks/${product_id}`);
    return of
      (this.fbRefSubs = this.feedbackRef.valueChanges().subscribe(res => {
        if (res) {
          console.log(res)
          this.feedbackData = res.feedbacks;
          this.totalRate = (this.feedbackData.reduce((prev, curr) => prev += Number(curr.starVoted), 0) / this.feedbackData.length).toFixed(1);
          this.updateStarSubs = this.updateStar(product_id, this.totalRate).subscribe();
          this.feedbackData.forEach((element => {
            switch (element.starVoted) {
              case 1: {
                this.value1s += 1; break;
              }
              case 2: {
                this.value2s += 1; break;
              }
              case 3: {
                this.value3s += 1; break;
              }
              case 4: {
                this.value4s += 1; break;
              }
              case 5: {
                this.value5s += 1; break;
              }
            }
          }))
          this.value5s = Number(((this.value5s / this.feedbackData.length) * 100).toFixed(1));
          this.value4s = Number(((this.value4s / this.feedbackData.length) * 100).toFixed(1));
          this.value3s = Number(((this.value3s / this.feedbackData.length) * 100).toFixed(1));
          this.value2s = Number(((this.value2s / this.feedbackData.length) * 100).toFixed(1));
          this.value1s = Number(((this.value1s / this.feedbackData.length) * 100).toFixed(1));
        }
      }))
  }

  sendFeedback(product, user, content: string, vote: number) {
    const feedbackRef: AngularFirestoreDocument<any> = this.afs.doc(`feedbacks/${product.id}`);
    this.feedbackData.push({
      id_product: product.id,
      name_product: product.name,
      starVoted: vote,
      content: content,
      owner_name: user.displayName || user.email.split("@")[0],
      owner_uid: user.uid,
      avatar: user.photoURL,
      createAt: new Date(),
    });
    feedbackRef.set({ 'feedbacks': this.feedbackData }, { merge: true });
    // this.loadFeedback(product.id);
  }

  //POST to mongoDB
  updateStar(id, star): Observable<any> {
    var params = {
      id: id,
      star: Number(star),
    };
    return this.http.post<any>(`${API_URL}/api/update_star`, params)
      .pipe(
        catchError(FeedbackService._handleError)
      );
  }
}
