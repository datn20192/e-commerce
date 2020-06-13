import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';

import { Bill } from '../../../models/bill.model';
import { BillApiService } from '../../../services/bill.service';

@Component({
    selector: 'app-shipper-delivery',
    templateUrl: './shipper-delivery.component.html'
})
export class ShipperDeliveryComponent {

    modalRef: BsModalRef;   
    billSubs: Subscription;
    bills: Bill[];

    constructor(
        private modalService: BsModalService,
        private billApiService: BillApiService
    ) {}

    ngOnInit() {
        this.load();
    }

    ngOnDestroy() {
        this.billSubs.unsubscribe();
    }

    load() {
        this.billSubs = this.billApiService.getUnPaidBill().subscribe(res => {
            let result = JSON.parse(res);
            if(result.code === 200) this.bills = result.data;
            else alert(`error server ${result.code}`);
        });
    }

    // Modal for bill detail
    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template, 
        {
            backdrop:'static', 
            class:'modal-xl',
            keyboard: true
        });    
    }  

    submitDelivery() {
        
    }
}