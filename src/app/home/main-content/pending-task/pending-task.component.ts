import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/schema/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-pending-task',
  templateUrl: './pending-task.component.html',
  styleUrls: ['./pending-task.component.css']
})
export class PendingTaskComponent {
  statusList:Array<string> = ["Assigned", "In Progress", "OnHold", "Resolved"];
  statusValue!:string;
  taskData!:any;
  constructor(
    private taskService: TaskService
  ){

  }

  getPendingTask(value: any){
    this.taskService.postPendingTask(value).subscribe(
      (res)=>{
        this.taskData = res;
        console.log(this.taskData);

      }
    )
  }
}
