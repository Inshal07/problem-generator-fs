import { Component, OnInit } from '@angular/core';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { User } from 'src/app/schema/user';
import { AuthService } from 'src/app/services/auth.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-assigned-me',
  templateUrl: './assigned-me.component.html',
  styleUrls: ['./assigned-me.component.css']
})
export class AssignedMeComponent implements OnInit {

  userEmail!:string;
  taskList$!: Subscription | Observable<Task> | any;
  constructor(
    private authService: AuthService,
    private taskService:TaskService
  ) {
  }

  ngOnInit(): void {
    console.log('Assigned to Me NGONITI')
    this.getCurrentUserDetails();
    setTimeout(()=>{
      this.getAssignedTask()
    },1000)

  }

  getCurrentUserDetails(){
    this.authService.getUserDetails().subscribe((res)=>{
      let userData:any = res;
      this.userEmail = userData.email;
    })
  }

  getAssignedTask(){
    this.taskList$ = this.taskService.getUserTask(this.userEmail);

  }



}
