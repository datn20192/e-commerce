import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';

import { Bill } from '../../../models/bill.model';
import { BillApiService } from '../../../services/bill.service';
import { ShipperApiService } from '../shipper.service';

@Component({
    selector: 'app-shipper-delivery',
    templateUrl: './shipper-delivery.component.html'
})
export class ShipperDeliveryComponent {

    modalRef: BsModalRef;   
    billSubs: Subscription;
    shipperSubs: Subscription;
    bills: Bill[];
    private isSubmit: boolean = false;
    public activeTab: string = 'cash';           // Enable signin tab automatically when navigating this page

    constructor(
        private modalService: BsModalService,
        private billApiService: BillApiService,
        private shipperApiService: ShipperApiService
    ) {}

    ngOnInit() {
        this.load();
    }

    ngOnDestroy() {
        this.billSubs.unsubscribe();
        if(this.isSubmit) this.shipperSubs.unsubscribe();
    }

    load() {
        this.billSubs = this.billApiService.getUnPaidBill(this.activeTab).subscribe(res => {
            let result = JSON.parse(res);
            if(result.code === 200) {
                this.bills = result.data;
                this.billApiService.changeCountUnPaidBill(this.bills.length);
            }
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

    clickSubmit(id) {
        this.isSubmit = true;
        this.shipperSubs = this.shipperApiService.submitDelivery(id.uid, id.billID).subscribe(res => {
            let result = JSON.parse(res);
            if(result.code === 200) {
                this.load();
            }
        });
    }

    clickTab(tab:string) {
        this.activeTab = tab;
        this.load();
    }
}