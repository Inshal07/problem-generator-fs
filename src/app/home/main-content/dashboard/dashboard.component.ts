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
  category:string = 'taskTitle'
  user:any
  taskList: Observable<Task> |any;

  categoryList:any = [
    'Task Title', 'Status', 'Assigned To', 'Assigned From', 'Priority'
  ]

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
        console.log(this.taskList);

      }
    )
  }

}
