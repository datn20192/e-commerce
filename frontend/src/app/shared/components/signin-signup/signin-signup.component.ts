import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signin-signup',
    templateUrl: './signin-signup.component.html'
})
export class SigninSignupComponent {    
    
    public activeTab = 'signin';           // Enable signin tab automatically when navigating this page
    constructor(
        private route: Router
    ) { }

    ngOnInit() {
        
    }


    clickTab(tab:string) {
        this.activeTab = tab;
    }

    submit() {
        this.route.navigate(['/']);         
    }
}