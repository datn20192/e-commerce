import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

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
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

/* Auth service */
import { AuthService } from './services/auth.service';
//Material
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

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

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';

// bootstrap
import { ModalModule } from 'ngx-bootstrap/modal';

// Service
import {ProductsApiService} from './services/product-api.service';
import { productCategoryServiceAPI } from './services/productCategory-api.service';

// Component
import { ListProductComponent } from './components/list-product/list-product.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    //HeaderComponent,
    SigninComponent,
    SignupComponent,
    ListProductComponent,
    NotFoundComponent,
    ProductDetailComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppHeaderModule,
    AppFooterModule,  
    AppSidebarModule, 
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    PerfectScrollbarModule,
    ModalModule.forRoot()        
  ],
  providers: [AuthService,ProductsApiService,productCategoryServiceAPI],
  bootstrap: [AppComponent]
})
export class AppModule { }
