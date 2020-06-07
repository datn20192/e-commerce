import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { UserInfor } from '../../../models//user.model';
import { Customer } from '../../../models/bill.model';

@Component({
    selector: 'app-shipper-delivery',
    templateUrl: './shipper-delivery.component.html'
})
export class ShipperDeliveryComponent {

    modalRef: BsModalRef;

    customerList: Customer[] = [
        {
            uid: "qZhYFzMwCvhfwSjr0DfVVyjuEZJ2",
            email: "huudoanh97@gmail.com",
            bill: [
                {
                    cart: [{
                        product: {
                            brand: "Nokia",
                            category: "DT",
                            description: ["Chính hãng, Nguyên seal, Mới 100%", "Miễn phí giao hàng toàn quốc", "Thiết kế: Nguyên khối", "Màn hình: IPS LCD, 5.71\", HD+", "Camera Trước/Sau: 8MP/ 13MP", "CPU: Mediatek MT6761 4 nhân", "Bộ Nhớ: 16GB", "RAM: 2GB", "SIM tương thích: 2 Nano SIM, Hỗ trợ 4G", "Tính năng: Màn hình luôn hiển thị AOD, Đèn pin, Chặn cuộc gọi, Chặn tin nhắn"],
                            groupID: "DT-MTB",
                            groupName: "Điện thoại - Máy tính bảng",
                            id: "5e78953b91c80552cb8450a8",
                            imageURL: ["https://salt.tikicdn.com/cache/75x75/ts/product/1e/9c/2a/58a9527e97bbacb7db00b938010b70c7.jpg", "https://salt.tikicdn.com/cache/75x75/ts/product/28/bd/b0/8ae6848b99ca69ac2911a95174041acc.jpg", "https://salt.tikicdn.com/cache/75x75/ts/product/6c/06/33/6fea4a8acd4866f65b23bdc9daa9dff2.jpg", "https://salt.tikicdn.com/cache/75x75/ts/product/6c/06/33/4cba1b5c3fa9d3e94424d573e9ec3eb6.jpg"],
                            link: "dien-thoai/dien-thoai-nokia-2.2-16gb-2gb-hang-chinh-hang",
                            name: "Điện Thoại Nokia 2.2 (16GB/2GB) - Hàng Chính Hãng",
                            price: "2999000",
                            quantity: "5",
                            star: 4.2
                        },
                        quantityPurchased: 1
                    }, {
                        product: {
                            brand: "HP",
                            category: "LT",
                            description: ["Hãng CPU: AMD", "Công nghệ CPU: AMD Ryzen 5", "Loại CPU: 3550H", "Tốc độ CPU: 2.1 Ghz", "Bộ nhớ đệm: 4MB Cache", "Tốc độ tối đa: Turbo Boost up to 3.7 GHz"],
                            groupID: "LT-TB",
                            groupName: "Laptop - Thiết Bị",
                            id: "5e78954b64e73a99f2453bd2",
                            imageURL: ["https://salt.tikicdn.com/cache/80x80/ts/product/51/36/e7/80f3cc057ad8ea8e6b0ed44fe1b18ea8.jpg", "https://salt.tikicdn.com/cache/80x80/ts/product/8e/17/15/fce72b3066b04e2e84860b827e5c3d83.jpg", "https://salt.tikicdn.com/cache/80x80/ts/product/48/d0/4e/82972e90e1c37672d3570a68ef9f97b5.jpg"],
                            link: "laptop/laptop-hp-pavilion-gaming-15-ec0050ax-:-amd-ryzen5-3550h-|-8gb-ram-|-128gb-ssd-+-1tb-hdd-|-gtx-1650-4gb-|-15.6-fhd-144hz-|-win-10-9av28pa-hang-chinh-hang",
                            name: "Laptop HP Pavilion Gaming 15-ec0050AX : AMD Ryzen5 3550H | 8GB RAM | 128GB SSD + 1TB HDD | GTX 1650 4GB | 15.6 FHD 144Hz | Win 10 (9AV28PA) - Hàng Chính Hãng",
                            price: "21000000",
                            quantity: "5",
                            star: 4.2
                        },
                        quantityPurchased: 1
                    }],
                    infor: {
                        address: {
                            details: "so 2",
                            district: "Đống Đa",
                            province: "Hà Nội",
                            subDistrict: "Kim Liên"
                        },
                        name: "Nguyễn Hữu Doanh",
                        phoneNumber: "0123456789"
                    },
                    date: "6/7/2020, 2:55:10 PM",
                    totalMoney: 23999000,
                    status: false,
                    id: "5edc9d708e9da90b86b05f35",
                    typeOfPayment: "cash"
                }
            ]
        },
        {
            uid: "qZhYFzMwCvhfwSjr0DfVVyjuEZJ2",
            email: "huudoanh97@gmail.com",
            bill: [
                {
                    cart: [{
                        product: {
                            brand: "Nokia",
                            category: "DT",
                            description: ["Chính hãng, Nguyên seal, Mới 100%", "Miễn phí giao hàng toàn quốc", "Thiết kế: Nguyên khối", "Màn hình: IPS LCD, 5.71\", HD+", "Camera Trước/Sau: 8MP/ 13MP", "CPU: Mediatek MT6761 4 nhân", "Bộ Nhớ: 16GB", "RAM: 2GB", "SIM tương thích: 2 Nano SIM, Hỗ trợ 4G", "Tính năng: Màn hình luôn hiển thị AOD, Đèn pin, Chặn cuộc gọi, Chặn tin nhắn"],
                            groupID: "DT-MTB",
                            groupName: "Điện thoại - Máy tính bảng",
                            id: "5e78953b91c80552cb8450a8",
                            imageURL: ["https://salt.tikicdn.com/cache/75x75/ts/product/1e/9c/2a/58a9527e97bbacb7db00b938010b70c7.jpg", "https://salt.tikicdn.com/cache/75x75/ts/product/28/bd/b0/8ae6848b99ca69ac2911a95174041acc.jpg", "https://salt.tikicdn.com/cache/75x75/ts/product/6c/06/33/6fea4a8acd4866f65b23bdc9daa9dff2.jpg", "https://salt.tikicdn.com/cache/75x75/ts/product/6c/06/33/4cba1b5c3fa9d3e94424d573e9ec3eb6.jpg"],
                            link: "dien-thoai/dien-thoai-nokia-2.2-16gb-2gb-hang-chinh-hang",
                            name: "Điện Thoại Nokia 2.2 (16GB/2GB) - Hàng Chính Hãng",
                            price: "2999000",
                            quantity: "5",
                            star: 4.2
                        },
                        quantityPurchased: 1
                    }, {
                        product: {
                            brand: "HP",
                            category: "LT",
                            description: ["Hãng CPU: AMD", "Công nghệ CPU: AMD Ryzen 5", "Loại CPU: 3550H", "Tốc độ CPU: 2.1 Ghz", "Bộ nhớ đệm: 4MB Cache", "Tốc độ tối đa: Turbo Boost up to 3.7 GHz"],
                            groupID: "LT-TB",
                            groupName: "Laptop - Thiết Bị",
                            id: "5e78954b64e73a99f2453bd2",
                            imageURL: ["https://salt.tikicdn.com/cache/80x80/ts/product/51/36/e7/80f3cc057ad8ea8e6b0ed44fe1b18ea8.jpg", "https://salt.tikicdn.com/cache/80x80/ts/product/8e/17/15/fce72b3066b04e2e84860b827e5c3d83.jpg", "https://salt.tikicdn.com/cache/80x80/ts/product/48/d0/4e/82972e90e1c37672d3570a68ef9f97b5.jpg"],
                            link: "laptop/laptop-hp-pavilion-gaming-15-ec0050ax-:-amd-ryzen5-3550h-|-8gb-ram-|-128gb-ssd-+-1tb-hdd-|-gtx-1650-4gb-|-15.6-fhd-144hz-|-win-10-9av28pa-hang-chinh-hang",
                            name: "Laptop HP Pavilion Gaming 15-ec0050AX : AMD Ryzen5 3550H | 8GB RAM | 128GB SSD + 1TB HDD | GTX 1650 4GB | 15.6 FHD 144Hz | Win 10 (9AV28PA) - Hàng Chính Hãng",
                            price: "21000000",
                            quantity: "5",
                            star: 4.2
                        },
                        quantityPurchased: 1
                    }],
                    infor: {
                        address: {
                            details: "so 2",
                            district: "Đống Đa",
                            province: "Hà Nội",
                            subDistrict: "Kim Liên"
                        },
                        name: "Nguyễn Hữu Doanh",
                        phoneNumber: "0123456789"
                    },
                    date: "6/7/2020, 2:55:10 PM",
                    totalMoney: 23999000,
                    status: false,
                    id: "5edc9d708e9da90b86b05f35",
                    typeOfPayment: "cash"
                }
            ]
        }
    ]

    constructor(
        private modalService: BsModalService
    ) {}

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