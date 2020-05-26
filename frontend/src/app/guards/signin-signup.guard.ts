import { Injectable } from '@angular/core';
import { 
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
}                     from '@angular/router';

import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SigninSignupGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        return !this.checkLogin();
    }    

    checkLogin(): boolean {
        if(this.authService.isLoggedIn === false) return false;
        
        this.router.navigate(['/']);
        return true;
    }
}