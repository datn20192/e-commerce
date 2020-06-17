import { Component, TemplateRef, Input, Output, EventEmitter } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Bill } from '../../../models/bill.model';

@Component({
    selector: 'app-bill-table',
    templateUrl: './bill-table.component.html'
})
export class BillTableComponent {

    @Input() bills: Bill[];
    @Output() confirm = new EventEmitter();

    modalRef: BsModalRef;   
    
    private isSubmit: boolean = false;
    public activeTab: string = 'cash';           // Enable signin tab automatically when navigating this page

    constructor(
        private modalService: BsModalService
    ) {}

    ngOnInit() {
        this.load();
    }

    ngOnDestroy() {
    }

    load() {
        
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

    clickSubmit(uid: string, billID: string) {
        this.confirm.emit({uid: uid, billID: billID});
    }
  
}