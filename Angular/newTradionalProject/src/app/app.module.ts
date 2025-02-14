import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderModule } from './order/order.module';
import { UserModule } from './user/user.module';
import { ChildComponent } from './child/child.component';
import { UserServiceService } from './user-service.service';
import { SampleComponent } from './sample/sample.component';




@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    SampleComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrderModule,
    UserModule,
    SampleComponent
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    UserServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
