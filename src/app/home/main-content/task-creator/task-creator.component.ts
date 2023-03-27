import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { Task } from 'src/app/schema/task';
import { AuthService } from 'src/app/services/auth.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-creator',
  templateUrl: './task-creator.component.html',
  styleUrls: ['./task-creator.component.css']
})
export class TaskCreatorComponent implements OnInit {
  @Output() value= new EventEmitter();
  userData:any = [];
  disabled:boolean = true;
  userEmailsList: Array<string> | any = [];
  constructor(
    private authService: AuthService,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.getCurrentUser();
    this.getEmails();
  }


  //priority List
  priorityList:Array<string> = ["Low", "Moderate", "High"];
  //list of Status
  statusList:Array<string> = ["Assigned", "In Progress", "OnHold", "Resolved"];

  //task form
  taskForm: Task | any = new FormGroup({
    taskTitle: new FormControl('', Validators.required),
    taskDescription: new FormControl('', Validators.required),
    currentDate: new FormControl((new Date()).toISOString().substring(0,10)),
    endDate: new FormControl('', Validators.required),
    priority: new FormControl('', Validators.required),
    assignedTo:  new FormControl('', Validators.required),
    assignedFrom: new FormControl(this.userData.email),
    status: new FormControl('', Validators.required),
  })

 getCurrentUser(){
   return this.authService.getUserDetails().subscribe((res)=> this.userData = res);
 }

 getEmails(){
  return this.authService.getAllUserEmail().subscribe((res)=> {
    this.userEmailsList = res;
     console.log(this.userEmailsList)
  } )
 }

 submitTask(){

  this.taskForm.get('assignedFrom').setValue(this.userData.email);
    if(this.taskForm.valid){
      this.taskService.postTask(this.taskForm.value).subscribe(
        (res) => console.log(res),

        (err) => console.error(err)
     )
     this.clearForm();

    }
    this.emitValueToRoute();
  }

  emitValueToRoute(){
    this.value.emit('dashboard');
  }

  clearForm(){
    this.taskForm.reset();
  }


}
