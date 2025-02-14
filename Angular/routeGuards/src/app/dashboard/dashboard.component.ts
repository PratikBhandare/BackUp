import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit,AfterViewInit {
  constructor(private route:ActivatedRoute){
    console.log("componet loded")


  }
  ngOnInit(): void {
    this.resolveData=this.route.snapshot.data['resolveData']
  }

  resolveData!:string;

  ngAfterViewInit(): void {
    console.log("component Rendered !!")
  }

}
