import { Component, Input } from '@angular/core';

import { Cart } from '../../../../models//cart.model';

@Component({
    selector: 'app-mini-cart',
    templateUrl: './mini-cart.component.html'
})
export class MiniCartComponent {
    @Input() cart: Cart[];

    constructor(){}

}