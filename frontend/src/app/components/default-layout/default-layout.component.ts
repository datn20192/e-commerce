import { Component, TemplateRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent {
  modalRef: BsModalRef;
  public navItems = navItems;

  constructor(
    private auth: AuthService,
    private modalService: BsModalService
    ){}

  ngOnInit() {

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
    this.modalRef = this.modalService.show(template);    
  }
}
