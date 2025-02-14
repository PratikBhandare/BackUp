import { Component } from '@angular/core';
import { ProfileComponent } from './profile/app-profile';
import { LoginComponent } from './login/login.component';
import { CounterComponent } from './counter/counter.component';
import { WelcomeComponent } from './welcome/welcome.component';

@Component({
  selector: 'root',
  imports: [ProfileComponent,LoginComponent,CounterComponent,WelcomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pratik';
}
