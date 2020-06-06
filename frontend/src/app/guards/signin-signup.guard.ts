import { Injectable } from '@angular/core';
import { 
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
}                     from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { take, tap, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SigninSignupGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        return this.checkGuset();
    }    

    checkGuset(): Observable<boolean> {
        return this.authService.user$.pipe(
            take(1),
            map(user => user && this.authService.isLogin(user) ? false : true),
            tap(guest => {
                if(!guest) this.router.navigate(['']);
            })
        );
    }
}