import { Pipe, PipeTransform } from '@angular/core';

import { Address } from '../../../models/user.model';

@Pipe({ name: 'cartAddressInfor'})
export class CartAddressInfor implements PipeTransform {
    transform(address: Address): string {
        return `${address.details.trim()}, ${address.subDistrict.trim()}, ${address.district.trim()}, ${address.province.trim()}`;
    }
}