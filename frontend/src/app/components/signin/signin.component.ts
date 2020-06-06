import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as firebase from 'firebase';
import { AuthService } from 'src/app/services/auth.service';
import { ItemCartService } from '../../services/item-cart.service'
import { User } from '../../models/user.model';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {

  user: User;

  formSignin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/['0-9a-zA-Z']{6,}/)])
  });

  @Output() onClick = new EventEmitter();

  constructor(
    private router: Router,
    private authentification: AuthService,
    private itemCartService: ItemCartService
  ) { 
    this.authentification.user$.subscribe(user => this.user=user);
  }  

  ngOnInit() {
  }

  onSubmit(formValue) {
    // (click)="authentification.SignIn(email.value, password.value)"
    if (this.formSignin.valid) {
      const email = formValue.value['email'];
      const password = formValue.value['password'];
      this.authentification.signIn(email, password).then(()=> {
        this.authentification.user$.subscribe(user => {
          if(this.authentification.isLogin(user)) {
            this.formSignin.reset();
            this.signinClick();
          }   
        });  
      });       
    } else {
      console.error("Invalid")
    }
  }

  googleSignin() {
    this.authentification.GoogleAuth().then(()=>{
      this.authentification.user$.subscribe(user => {
        if(user) this.signinClick();
      });
      
    });      
  }

  facebookLogin() {
    this.authentification.FacebookAuth().then(() => {
      this.authentification.user$.subscribe(user => {
        if(user) this.signinClick();
      });
    }); 
    
  }

  signinClick() {
    this.itemCartService.addTmpProductToCart(this.user.uid);
    this.onClick.emit(null);
    if(this.router.url == '/dangnhap-dangky') this.router.navigate([''])
  }

}
