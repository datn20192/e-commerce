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
  public userInfor = new UserInfor("", "", new Address("", "", "", ""));
 
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
    this.route.navigate(['/thanh-toan/hoa-don']);  
    this.checkoutApi.addUserInfor(this.userInfor);
  }

  load() {
    this.account = JSON.parse(localStorage.getItem('user')).email;    
    this.userInforSubs = this.checkoutApi.getUserInfor().subscribe(res => {                  
      let infor = JSON.stringify(res.payload.data().infor);     
      if (infor != '{}') this.userInfor = res.payload.data().infor;          
    });
  }
  
}