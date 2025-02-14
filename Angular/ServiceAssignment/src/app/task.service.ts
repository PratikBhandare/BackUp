import { Injectable } from '@angular/core';
import { status } from './task/task-list/status';

@Injectable({
  providedIn: 'platform'
})
export class TaskService {

  TaskList=[{name:"Task1",status:status.Pending,priority:"Urgent",id:1},{name:"Task2",status:status.InProgress,priority:"not urgent",id:2},{name:"Task 3",status:status.Pending,priority:"Dont Know",id:3}]

  constructor() { }

  hello(id:number){
    console.log(`From Task service with id ${id}`)
  }

  getList(){
    return this.TaskList;
  }

  updateStatus(id:number){

    // data=data.filter(x=>x.id1!==id);
    for(let i=0;i<this.TaskList.length;i++){
      if(this.TaskList[i].id == id){
        this.TaskList[i].status=status.Completed;
        console.log(this.TaskList[i])
      }
    }



  }

  updateData(){
    return this.TaskList;
    
  }
}
