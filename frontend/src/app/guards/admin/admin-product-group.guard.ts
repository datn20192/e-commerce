import { Injectable } from '@angular/core';
import { 
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
}                     from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { take, tap, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AdminProductGroupGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router
    ) {}    

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        let url: string = state.url;
        return this.checkLogin(url);
    }
    
    private checkLogin(url: string): Observable<boolean> {
        return this.authService.user$.pipe(
            take(1),
            map(user => user && this.authService.isAdmin(user) ? false : true),
            tap(preventAdmin => {
                if(!preventAdmin) {                    
                    let adminUrl = "/quan-ly" + url;
                    this.router.navigate([adminUrl]);
                }
            })
        );
    }
}