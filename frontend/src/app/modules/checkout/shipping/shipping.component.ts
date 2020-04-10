import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import { CheckoutApiService } from '../checkout.service';

import { UserInfor, Address, User } from '../../../models/user.model';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  userInforSubs: Subscription;

  private account: string = '';
  private address = new Address("", "", "", "");
  private userInfor = new UserInfor("", "", this.address);
 
  constructor(
    private route: Router,
    private checkoutApi: CheckoutApiService
  ) { }

  ngOnInit() {
    this.load();
  }

  onDestroy() {
    this.userInforSubs.unsubscribe();
  }

  onSubmit() {
    this.route.navigate(['/checkout/payment']);  
    this.checkoutApi.addUserInfor(this.userInfor);
  }

  load() {
    this.account = JSON.parse(localStorage.getItem('user')).email;    
    this.userInforSubs = this.checkoutApi.getUserInfor().subscribe(res => {                  
      let infor = res.payload.data().infor;     
      if(infor !== {}) this.userInfor = res.payload.data().infor;           
    });
  }
  
}