import { Injectable } from '@angular/core';
import { 
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild,
    CanLoad, Route
}                     from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService } from '../../services/auth.service';
import { take, tap, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ShipperModuleGuard implements CanActivate, CanActivateChild, CanLoad {
    constructor(
        private authService: AuthService,
        private router: Router
    ) {}    

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        return this.checkLogin();
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        return this.canActivate(route, state);
    }

    canLoad(route: Route): Observable<boolean> {    
        return this.checkLogin();
    }

    private checkLogin(): Observable<boolean> {
        return this.authService.user$.pipe(
            take(1),
            map(user => user && user.roles.shipper ? true : false),
            tap(shipper => {
                if(!shipper) this.router.navigate(['']);
            })
        );
    }
}