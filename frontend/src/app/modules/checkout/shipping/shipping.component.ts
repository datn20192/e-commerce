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
  checkoutSubs: Subscription;
  
  private isCheckoutSubs: boolean = false;
  public userInfor:UserInfor ;
  user: User;
  public districtList = [];
  public wardList = [];
 
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
    if(this.isCheckoutSubs) this.checkoutSubs.unsubscribe();
  }

  onSubmit() {
    this.checkoutApi.addUserInfor(this.userInfor, this.user.uid);
    this.route.navigate(['/thanh-toan/hoa-don']);      
  }

  load() {
    this.userInforSubs = this.authService.user$.subscribe(user => {
      this.user = user;
      if (user.infor) 
      {
        this.userInfor = user.infor; 
        if (user.infor.name == "") this.userInfor.address.province = "Hà Nội"
        this.checkoutSubs = this.checkoutApi.GetDistrictsOfHanoi().subscribe(res => {          
          let result = JSON.parse(res);
          if(result.code === 200) {
            this.districtList = result.data;
            this.changeDistrict();
          }
          else alert('error');
          this.isCheckoutSubs = true;
        });
      }      
    });    
  }

  changeDistrict() {
    var district = this.districtList.filter((district) => {
      return district.name == this.userInfor.address.district;
    });
    this.wardList = district[0].ward;
  }
  
}