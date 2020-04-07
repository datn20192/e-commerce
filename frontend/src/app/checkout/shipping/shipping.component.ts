import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { CheckoutApiService } from '../checkout.service';

import { Bill, Cart } from '../../models/bill.model';
import { Customer, Address, User } from '../../models/user.model';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  customerSubs: Subscription;

  private account: string = '';
  private address = new Address('Hanoi', 'Dong Da', 'Kim Lien', 'so 19');
  private customer = new Customer('', 'Don Nguyen', '0123456789', this.address);
  // private cart = new Cart('','','');

  private cart: Cart[] = [
    {
      'product': {
        'id': {'$oid': "5e78952dbed6ef2fdb5d84f3"},
        'groupID': "DT-MTB",
        'groupName': "Điện thoại - Máy tính bảng",
        'category': "MTB",
        'name': "iPad WiFi/Cellular 32GB New 2018 - Hàng Nhập Khẩu",
        'link': "may-tinh-bang/ipad-wifi-cellular-32gb-new-2018-hang-nhap-khau",
        'brand': "Apple",
        'imageURL': [
          "https://salt.tikicdn.com/cache/75x75/ts/product/16/ff/cd/642b1e3f7716c5f4bda9fea57ddc3d08.jpg", 
          "https://salt.tikicdn.com/cache/75x75/ts/product/a2/94/8a/220b6462608f10c938f666f45ee374ad.jpg"
        ],
        'price': "11990000",
        'description': ["Mới 100%", "Miễn phí giao hàng toàn quốc", "Thiết kế: Nhôm nguyên khối", "Màn hình: Retina 9.7 inch", "Camera Trước/Sau: 1.2MP/8MP", "CPU: Apple A10 Fusion 4 nhân 2.34GHz", "Bộ Nhớ: 32GB", "RAM: 2GB", "SIM: 1 Nano SIM", "Tính năng: Mở khóa bằng vân tay"],
        'quantity': "5",
        'star': "1"
      },
      'quantity': 1
    },
    {
      'product': {
        'id': {'$oid': "5e78953b91c80552cb8450c5"},
        'groupID': "DT-MTB",
        'groupName': "Điện thoại - Máy tính bảng",
        'category': "DT",
        'name': "Điện Thoại Vsmart Joy 2+ (Hàng Chính Hãng)",
        'link': "dien-thoai/dien-thoai-vsmart-joy-2+-hang-chinh-hang",
        'brand': "Vsmart",
        'imageURL': ["https://salt.tikicdn.com/cache/75x75/ts/product/ad/35/4c/a01688d9a2e7ad7e21907a51a4ca0168.jpg", "https://salt.tikicdn.com/cache/75x75/ts/product/fe/5b/91/f0fd7c37e262c919dca1c4cf1be3846b.jpg", "https://salt.tikicdn.com/cache/75x75/ts/product/20/80/35/fc5b37046736055dc78fe00f4634fcb2.jpg", "https://salt.tikicdn.com/cache/75x75/ts/product/7a/49/67/c3749cf1349127eb39713d8eda224d32.jpg", "https://salt.tikicdn.com/cache/75x75/ts/product/4e/83/50/8b4facefcda66f4b5173103ba5e2b77c.jpg"],
        'price': "2990000",
        'description': ["Màn hình: IPS LCD, 6.2", "HD+", "Hệ điều hành: Android 9.0 (Pie)", "Camera sau:	Chính 13 MP & Phụ 5 MP", "Camera trước: 8 MP", "CPU: Qualcomm Snapdragon 450 8 nhân 64-bit", "RAM: 2 GB/ 3G (tùy chọn cấu hình)", "Bộ nhớ trong: 32 GB", "Thẻ nhớ: MicroSD, hỗ trợ tối đa 128 GB", "Thẻ SIM: 2 Nano SIM, Hỗ trợ 4G", "Dung lượng pin: 4500 mAh, có sạc nhanh"],
        'quantity': "5",
        'star': "4.3"
      },
      'quantity': 2
    }
  ];

  private bill = new Bill(this.cart, this.customer, Date.now.toString(), 100000, false, '');

  constructor(
    private route: Router,
    private checkoutApi: CheckoutApiService
  ) { }

  ngOnInit() {
    // this.load();
  }

  onDestroy() {
    this.customerSubs.unsubscribe();
  }

  onSubmit() {
    this.route.navigate(['/checkout/payment']);
  }

  load() {
    this.account = JSON.parse(localStorage.getItem('user')).email;    
    this.customerSubs = this.checkoutApi.getCustomerByAccount(this.account).subscribe(res => {      
      let result = JSON.parse(res);          
      if(result.code == 200) {
        this.customer = result.data;
      } 
      else
        this.customer = new Customer(this.account, '', '', this.address);
    });
  }
  
}