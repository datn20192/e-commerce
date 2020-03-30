import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {    

    private isAdmin: boolean;

    constructor(
        private router: Router,
        private authService: AuthService
    ) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|boolean {
        let loggedIn = this.authService.isLoggedIn;
                  
        if(loggedIn ) return true;
        this.router.navigate(['']);
        return false;
    }
}