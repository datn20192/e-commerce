import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

// Service

// Model

@Component({
  selector: 'app-admin-getting-customer',
  templateUrl: './admin-getting-customer.component.html'
})
export class AdminGettingCustomerComponent {    
    
    constructor(
    ) { }
  
    ngOnInit() {            
      this.load();  
    }
  
    ngOnDestroy() {
      
    }     
  
    load() {            
      
    }      

}