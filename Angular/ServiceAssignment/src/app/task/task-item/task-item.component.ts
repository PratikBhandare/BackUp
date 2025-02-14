import { Component, EventEmitter, Input, OnChanges } from '@angular/core';
import { status } from '../task-list/status';
import { TaskService } from '../../task.service';
import { Output } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-task-item',
  standalone: false,

  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {


  // @Input() Data:any={};
  // @Input() TaskList:any[]=[];
  // @Input() Data: any = {};
  // @Output() event = new EventEmitter<any[]>()

  // name: String = "";
  // status: String = "";
  // priority: String = "";
  // id: number = 0;


  Data1: any = {};



  constructor(private taskservice: TaskService) {
    // this.taskservice.hello();
    // this.Data = this.taskservice.updateData();

    // this.Data1 = this.taskservice.updateData();


  }

  ngOnInit(){
    this.Data1 = this.taskservice.updateData();
  }

  updateStatus(id: number) {

    this.taskservice.updateStatus(id);
    this.Data1 = this.taskservice.updateData();
    // this.event.emit(this.taskservice.TaskList)

    // this.name= this.Data1.name;
    // this.status = this.Data1.status;
    // this.priority = this.Data1.priority;
    // this.id = this.Data1.id;


    //console.log(this.priority);


  }

}
