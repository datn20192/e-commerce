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

// Import containers
import { DefaultLayoutComponent } from './containers';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

// Service
import {ProductsApiService} from './services/product-api.service';
import { productCategoryServiceAPI } from './services/productCategory-api.service';

// Component
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SidebarDComponent } from './components/sidebar-d/sidebar-d.component';
import { CarouselListProductComponent } from './components/products/common/list-product-carousel/list-product-carousel.component';
import { CardProductComponent } from './components/products/common/card-product/card-product.component';
import { HomeProductsComponent } from './components/products/home-products/home-products.component';
import { GroupProductsComponent } from './components/products/group-products/group-products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ListProductGridComponent } from './components/products/common/list-product-grid/list-product-grid.component';

@NgModule({
  declarations: [
    AppComponent,    
    ...APP_CONTAINERS,    
    SigninComponent,
    SignupComponent,    
    NotFoundComponent,
    ProductDetailComponent,
    SidebarDComponent,
    CarouselListProductComponent,
    CardProductComponent,    
    HomeProductsComponent, GroupProductsComponent, ListProductGridComponent                 
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
  providers: [
    AuthService,ProductsApiService,productCategoryServiceAPI
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
