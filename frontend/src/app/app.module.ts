import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared-module';

/* Impotr AngularFire Modules */
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { HeaderComponent } from './components/header/header.component';

// Firebase config
import { environment } from '../environments/environment';

/* Auth service */
import { AuthService } from './services/auth.service';

// Coreui template
import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ChartsModule } from 'ng2-charts';

// Service
import {ProductsApiService} from './services/product-api.service';
import { ProductCategoryServiceAPI } from './services/productCategory-api.service';

// Component
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SidebarDComponent } from './sidebar-d/sidebar-d.component';
import { SharedService } from './services/shared.service';

@NgModule({
  declarations: [
    AppComponent,   
    NotFoundComponent,    
    SidebarDComponent,              

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,    
    HttpClientModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppHeaderModule,
    AppFooterModule,  
    AppSidebarModule, 
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    PerfectScrollbarModule,
    ModalModule.forRoot(),   
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    AuthService,  
    ProductsApiService,
    ProductCategoryServiceAPI,
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }