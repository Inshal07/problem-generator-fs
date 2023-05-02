import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css']
})
export class DeleteTaskComponent {
  taskList$!:Observable<any>;

  constructor(private taskService: TaskService){

  }
  ngOnInit(){
    this.taskList$ = this.taskService.getTask()
  }
}
