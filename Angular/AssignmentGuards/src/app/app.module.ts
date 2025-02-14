import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderRoutingModule } from './order/order-routing.module';
import { ProductRoutingModule } from './product/product-routing.module';
import { UserRoutingModule } from './user/user-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { UserModule } from './user/user.module';
// import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrderRoutingModule,
    ProductRoutingModule,
    UserRoutingModule,
    
    

  ],
  exports:[
    NavbarComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
