import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskActionComponent } from './task-action/task-action.component';
import { TaskService } from '../task.service';



@NgModule({
  declarations: [
    TaskListComponent,
    TaskItemComponent,
    TaskActionComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[TaskService],
  exports:[
    TaskListComponent,
    TaskItemComponent,
    TaskActionComponent
  ]
})
export class TaskModule { }
