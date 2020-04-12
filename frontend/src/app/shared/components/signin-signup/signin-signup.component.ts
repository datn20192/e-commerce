import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../../../models/product.model';
import { Cart } from '../../../models/cart.model';

import { ItemCartService } from '../../../services/item-cart.service';

@Component({
    selector: 'app-signin-signup',
    templateUrl: './signin-signup.component.html'
})
export class SigninSignupComponent {

    // @Input() product: Product;
    private product = new Product(
        {$oid: "5e78953b91c80552cb84509e"},
        "DT-MTB",
        "Điện thoại - Máy tính bảng",
        "DT",
        "Điện Thoại Samsung Galaxy Note 10 Lite (128GB/8GB) - Hàng Chính Hãng",
        "dien-thoai/dien-thoai-samsung-galaxy-note-10-lite-128gb-8gb-hang-chinh-hang",
        "Samsung",
        ["https://salt.tikicdn.com/cache/75x75/ts/product/ab/11/83/dfd3a8ba952cd909215b50bd2412ed8f.jpg"],
        "13990000",
        ["Hàng chính hãng Samsung Việt Nam, Nguyên seal"],
        "5",
        "4.7"
    );

    private cart: Cart[];

    private activeTab = 'signin';

    constructor(
        private route: Router,
        private itemCartService: ItemCartService
    ) { }

    ngOnInit() {
        this.cart = this.itemCartService.showItemCart;
    }

    clickTab(tab:string) {
        this.activeTab = tab;
    }

    submitSignin() {
        this.route.navigate(['/']);
    }
}