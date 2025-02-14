import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { UserLocalService } from './user-local.service';
import { TaskModule } from './task/task.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TaskModule
    
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    UserService,
    UserLocalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
