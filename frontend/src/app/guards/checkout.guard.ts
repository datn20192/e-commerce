import { Injectable } from '@angular/core';
import { 
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivate
}                     from '@angular/router';

import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CheckoutGuard implements CanActivate {
    private guard: boolean;

    constructor(
        private authService: AuthService,
        private router: Router
    ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {        
        return this.authService.getUserInfor()
        .pipe(first())  // just subscribe the first change
        .pipe(
            map(res => {
                if(res.infor == {} || res.cart.length == 0) {
                    this.router.navigate(['']);
                    return false;
                }
                else return true;
            })
        );
    }    

}