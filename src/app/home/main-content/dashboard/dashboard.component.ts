import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Task } from 'src/app/schema/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  filterTerm!:string;
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
        console.log(this.taskList);
      }


    )
  }




}
