import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { User, UserInfor } from '../../../models/user.model';

@Component({
    selector: 'app-bill',
    templateUrl: './bill.component.html',
    styleUrls: ['./bill.component.css']
})

export class BillComponent {

    @Input() user:User;  
    @Input() numberOfItems: number;      

    constructor(
        private route: Router
    ) {}

    ngOnInit() {        
       
    }

    navigate(path:string) {
        this.route.navigate([path]);
    }
}

