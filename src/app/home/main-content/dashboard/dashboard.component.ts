import { Component, EventEmitter, OnInit, Output, SimpleChange, ViewChild } from '@angular/core';
import { filter, Observable, Subject } from 'rxjs';
import { Task } from 'src/app/schema/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Output('ngModelChange') update = new EventEmitter();

  filterTerm!:any;
  user:any
  taskList: Observable<Task> |any;
  constructor(
    private taskAPI: TaskService
  ) {

  }


  ngOnInit(): void {
    this.getAllTask()

  }

  getAllTask(){
    this.taskAPI.getTask().subscribe(
      res => {
        this.taskList =res
      }
    )
  }

  changeValue(value:any){
    this.filterTerm = value
    console.log(this.filterTerm);
    this.taskList = this.taskList.filter((item:any)=> {
      return item.taskTitle
    } )
    console.log(this.taskList);

  }




}
