import { Injectable } from '@angular/core';
import { 
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivate
}                     from '@angular/router';

import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { UserInfor } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class CheckoutGuard implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router
    ){ }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {        
        return this.authService.user$.pipe(
            take(1),
            map(user => {
                if(user && user.roles.customer) {
                    if (this.checkNullInfor(user.infor) || user.cart.length==0) {
                        alert("Giỏ hàng trống hoặc chưa nhập thông tin địa chỉ");
                        this.router.navigate(['']);
                        return false;
                    }
                    else return true;
                }  
            })
        );
    }    

    private checkNullInfor(infor: UserInfor) {
        if(infor.name == "" || infor.phoneNumber == "" ||
            infor.address.details == "" || infor.address.district == "" ||
            infor.address.province == "" || infor.address.subDistrict == ""
        ) return true;
        else return false;
    }

}