import { Component, Input } from '@angular/core';

import { UserInfor } from '../../../../models/user.model';

@Component({
    selector: 'app-mini-shipping',
    templateUrl: './mini-shipping.component.html'
})
export class MiniShippingComponent {
    @Input() infor: UserInfor;

    constructor(){}

}