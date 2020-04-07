import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Bill } from '../../models/bill.model';

@Component({
    selector: 'app-bill',
    templateUrl: './bill.component.html',
    styleUrls: ['./bill.component.css']
})

export class BillComponent {

    @Input() bill:Bill;

    private address:string = '';

    constructor(
        private route: Router
    ) {}

    ngOnInit() {
        console.log(this.bill);
        this.load();    
    }

    load() {
        let addressArr = this.bill.customer.address;
        this.address = `${addressArr.details}, ${addressArr.subDistrict}, ${addressArr.district}, ${addressArr.province}`;
    }

    navigate(path:string) {
        this.route.navigate([path]);
    }
}

