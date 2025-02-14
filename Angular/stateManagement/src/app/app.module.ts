import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home.component';
import { UserrutingModule } from './user/userruting/userruting.module';
import { FormsModule } from '@angular/forms';
import { GenButtonComponent } from './gen-button/gen-button.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GenButtonComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    UserrutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
