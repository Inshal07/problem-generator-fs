import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../schema/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  readonly url: string = 'http://localhost:3000/';

  constructor(
    private http: HttpClient
  ) { }

  getTask():Observable<Task | any>{
    return this.http.get(this.url + 'getTasks');
  }

  postTask(task:Task):Observable<Task| any>{
    return this.http.post(this.url + 'taskCreate', task)
  }

  getUserTask(data:any) {
    console.log(data)
    return this.http.post(this.url + 'taskbyUser', {email: data});
  }

  postPendingTask(value:any){
    console.log(value
      );

    return this.http.post(this.url + 'pending', {value:value});
  }
}
