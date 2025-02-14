import { Component, Input } from '@angular/core';
import { status } from './status';
import { TaskService } from '../../task.service';
import { OnInit } from '@angular/core';
import { log } from 'console';
@Component({
  selector: 'app-task-list',
  standalone: false,
  
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  Data:any[]=[];
  constructor(private taskS:TaskService){
    // this.Data=this.taskS.getList();
    // this.Data=this.taskS.TaskList;
  }

  ngOnInit(){
    this.Data=this.taskS.getList();
  }

  getData(event:any){
    console.log(event);
  
    this.Data = event

  }

  
 

}
