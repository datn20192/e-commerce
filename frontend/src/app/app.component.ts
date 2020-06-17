import { Component, TemplateRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { ItemCartService } from './services/item-cart.service';
import { AuthService } from './services/auth.service';
import { SharedService } from './services/shared.service';
import { BillApiService } from './services/bill.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{  

  modalRef: BsModalRef; 
  user: User;
  billSubs: Subscription;
  itemCartSubs: Subscription;
  countSubs: Subscription;
  authSubs: Subscription;

  numberOfUnPaidBills: Number;

  constructor(
    public auth: AuthService,
    private modalService: BsModalService,
    private icService: ItemCartService,
    public router: Router,
    private share: SharedService,
    private billApiService: BillApiService
    ){
      
    }

  ngOnInit() {
    this.load();
  }
  
  ngOnDestroy() {
    this.billSubs.unsubscribe();
    this.authSubs.unsubscribe();
    this.countSubs.unsubscribe();
  }
 
  load() {
    this.authSubs = this.auth.user$.subscribe(user => {
      this.user = user;
      if(this.auth.isCustomer(user)) this.icService.loadItemCart(this.user.uid);
      else if (this.auth.isShipper(user)) this.billApiService.getNumberOfUnPaidBill().subscribe(res => {
        let result = JSON.parse(res);
        if(result.code === 200) {
          this.billApiService.changeCountUnPaidBill(result.data);
          this.countSubs = this.billApiService.currentNumberOfUnPaidBill.subscribe(res => this.numberOfUnPaidBills = res);
        }
        else alert(`error server ${result.code}`);
      });
    });
  }

  signOut() {    
    this.auth.signOut();
  }

  public sidebarMinimized = false;
  //public navItems = navItems;
  onClick(value: string){
    this.router.navigate(['search']);
    this.share.search(value);
  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }   
  
  // Modal for sign in and sign up
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,
      {
        backdrop:'static',         
        keyboard: true
      });    

  } 

}