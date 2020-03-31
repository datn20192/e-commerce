import { Component, TemplateRef } from '@angular/core';
import { AuthService } from './services/auth.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { ItemCartService } from './services/item-cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  

  modalRef: BsModalRef;  

  constructor(
    private auth: AuthService,
    private modalService: BsModalService,
    private icService: ItemCartService     
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

}