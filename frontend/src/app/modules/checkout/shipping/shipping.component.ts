import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import { CheckoutApiService } from '../checkout.service';
import { AuthService } from '../../../services/auth.service';

import { UserInfor, User } from '../../../models/user.model';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  userInforSubs: Subscription;
  
  public userInfor:UserInfor ;
  user: User;
 
  constructor(
    private route: Router,
    private checkoutApi: CheckoutApiService,
    private authService: AuthService
  ) {
    
  }

  ngOnInit() {
    this.load();
  }

  onDestroy() {
    this.userInforSubs.unsubscribe();
  }

  onSubmit() {
    this.checkoutApi.addUserInfor(this.userInfor, this.user.uid);
    this.route.navigate(['/thanh-toan/hoa-don']);      
  }

  load() {
    this.authService.user$.subscribe(user => {
      this.user = user;
      if (user.infor) this.userInfor = user.infor; 
    });
    
  }
  
}