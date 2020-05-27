import { Component, TemplateRef, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { ItemCartService } from './services/item-cart.service';
import { Router } from '@angular/router';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{  

  modalRef: BsModalRef; 

  constructor(
    public auth: AuthService,
    private modalService: BsModalService,
    private icService: ItemCartService,
    public router: Router,
    private share: SharedService
    ){}

  ngOnInit() {
    this.icService.loadItemCart();
  }
  
  ngOnDestroy() {
  }
 
  signOut() {    
    this.auth.signOut();
  }

  public sidebarMinimized = false;
  //public navItems = navItems;

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

  searchEnter() {
    this.router.navigate(['search']);

  }

}