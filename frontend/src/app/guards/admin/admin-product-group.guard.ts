import { Injectable } from '@angular/core';
import { 
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Route
}                     from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AdminProductGroupGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router
    ) {}    

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        let url: string = state.url;
        return this.checkLogin(url);
    }
    
    private checkLogin(url: string): boolean {
        if(this.authService.isAdmin === true) {
            let adminUrl = "/quan-ly" + url;
            this.router.navigate([adminUrl]);
            return false;
        }
        else return true;
    }
}