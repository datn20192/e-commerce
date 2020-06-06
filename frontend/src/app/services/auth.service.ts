import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { User } from '../models/user.model';
import { ItemCartService } from './item-cart.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  defaultURL = '/assets/img/image.png';
  user$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private itemCartService: ItemCartService
  ) {
    // Get auth data, then get firestore user document || null
    this.user$ = this.afAuth.authState
    .pipe(
      switchMap(user => { 
      if(user) return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      else return of(null);
    })
    );    
  }

  //--------------------- Login/Signup Google, Facebook ---------------------//
  GoogleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }
  FacebookAuth() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.afs.collection('users', ref => ref.where("uid","==",credential.user.uid)).snapshotChanges().subscribe(res => { 
          if(!res.length) {
            this.setUserData(credential.user);
          }
          this.itemCartService.loadItemCart(credential.user.uid);
        });
      }).catch((error) => window.alert(error));
  }

  //-------------------- Signin/signup with Account&&Password -------------------//
  signUp(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then((credential) => this.setUserData(credential.user))
    .catch((error) => alert(error))
  }
  signIn(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then((credential)=> {
      this.afs.collection('users', ref => ref.where("uid","==",credential.user.uid)).snapshotChanges().subscribe(res => { 
        if(!res.length) {
          this.setUserData(credential.user);
        }
        this.user$.subscribe(user => {
          if(user.roles.customer) this.itemCartService.loadItemCart(credential.user.uid);
        });        
      });
    }).catch((error) => alert(error))
  }
  ForgotPassword(passwordResetEmail) {
    return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error);
    });
  }  

  private setUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName:  user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      roles: {
        customer: true
      },
      cart: [],
      infor: {
        name: "",
        phoneNumber: "",
        address: {
          province: "",
          district: "",
          subDistrict: "",
          details: "",
        }
      }
    };    
    return userRef.set(userData, { merge: true }).catch(
      (error) => alert(error)
    )
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['']);
    });
  }

  //--------------------- Role-based Authorization --------------------//
  isCustomer(user: User) {
    return this.checkAuthorization(user, "customer");
  }
  isAdmin(user: User) {
    return this.checkAuthorization(user, "admin");
  }
  isLogin(user: User) {
    return (user) ? true : false;
  }

  // determines if user has matching role
  private checkAuthorization(user: User, allowedRole: string): boolean {
    if (!user) {
      return false;
    }
    else if(user.roles[allowedRole]) return true;
    else return false
  } 

}