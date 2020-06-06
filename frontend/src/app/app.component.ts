import { Component, TemplateRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { ItemCartService } from './services/item-cart.service';
import { AuthService } from './services/auth.service';
import { SharedService } from './services/shared.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{  

  modalRef: BsModalRef; 
  user: User;

  constructor(
    public auth: AuthService,
    private modalService: BsModalService,
    private icService: ItemCartService,
    public router: Router,
    private share: SharedService
    ){
      
    }

  ngOnInit() {
    this.load();
  }
  
  ngOnDestroy() {
  }
 
  load() {
    this.auth.user$.subscribe(user => {
      this.user = user;
      if(this.user) this.icService.loadItemCart(this.user.uid);
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