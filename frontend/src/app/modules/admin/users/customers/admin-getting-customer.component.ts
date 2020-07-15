import { Component, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

// Service
import { AdminApiService } from '../../admin.service';

// Model

@Component({
  selector: 'app-admin-getting-customer',
  templateUrl: './admin-getting-customer.component.html'
})
export class AdminGettingCustomerComponent {    
  modalRef: BsModalRef;     
  adminServiceSubs: Subscription;

  customerList: [];
  bills = [];

  constructor(
    private modalService: BsModalService,
    private adminService: AdminApiService
  ) { }

  ngOnInit() {            
    this.load();  
  }

  ngOnDestroy() {
    
  } 
  
  // Modal for bill list
  openModal(template: TemplateRef<any>, paid, billList) {
    this.bills = billList.filter(bill => {
      return bill.status == paid;
    });
    this.modalRef = this.modalService.show(template, 
    {
        backdrop:'static', 
        class:'modal-xl',
        keyboard: true
    });    
  }  

  load() {            
    this.adminServiceSubs = this.adminService.getCustomer().subscribe(res => {
      let result = JSON.parse(res);
      if(result.code === 200) {
        this.customerList = result.data;

      }
      else alert("Error");
    });
  }      
    

}