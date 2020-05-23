import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as firebase from 'firebase';
import { AuthService } from 'src/app/services/auth.service';
import { ItemCartService } from '../../services/item-cart.service'
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {

  formSignin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/['0-9a-zA-Z']{6,}/)])
  });

  @Output() onClick = new EventEmitter();

  constructor(
    private authentification: AuthService,
    private itemCartService: ItemCartService
  ) { }  

  ngOnInit() {
  }

  onSubmit(formValue) {
    // (click)="authentification.SignIn(email.value, password.value)"
    if (this.formSignin.valid) {
      const email = formValue.value['email'];
      const password = formValue.value['password'];
      this.authentification.SignIn(email, password).then(()=> {
        if(this.authentification.isLoggedIn === true) {
          this.formSignin.reset();
          this.signinClick();
        }     
      });       
    } else {
      console.error("Invalid")
    }
  }

  googleSignin() {
    this.authentification.GoogleAuth().then(()=>{
      if(this.authentification.isLoggedIn===true) this.signinClick();
    });      
  }

  facebookLogin() {
    this.authentification.FacebookAuth().then(() => {
      if(this.authentification.isLoggedIn===true) this.signinClick();
    }); 
    
  }

  signinClick() {
    this.itemCartService.addTmpProductToCart();
    this.onClick.emit(null);
  }

}
