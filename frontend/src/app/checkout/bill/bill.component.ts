import { Component, Input } from '@angular/core';

import { Bill } from '../../models/bill.model';

@Component({
    selector: 'app-bill',
    templateUrl: './bill.component.html',
    styleUrls: ['./bill.component.css']
})

export class BillComponent {

    @Input() bill:Bill;

    private address:string = '';

    ngOnInit() {
        console.log(this.bill);
        this.load();    
    }

    load() {
        let addressArr = this.bill.customer.address;
        this.address = `${addressArr.details}, ${addressArr.subDistrict}, ${addressArr.district}, ${addressArr.province}`;
    }
}

