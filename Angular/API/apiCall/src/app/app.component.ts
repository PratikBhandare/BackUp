import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, throttle, throttleTime } from 'rxjs';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  message: string | undefined;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getMessage().subscribe(
      data => {this.message = data.message;
        console.log(data);  
      },
      error => console.error('Error:', error),
    );
    alert("succes")
  }
}
