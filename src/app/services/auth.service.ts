import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../schema/user';
import { UserLogin } from '../schema/userLogin';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly url: string = 'http://localhost:3000/';

  constructor(
    private http: HttpClient
  ) { }

  createUser(data:User){
    return this.http.post(this.url + 'register', data);
  }

  loginUser(data:UserLogin){
    console.log(data);

    return this.http.post(this.url + 'login', data);
  }

  getUserDetails(){
    let id = localStorage.getItem('Id');
    return this.http.post(this.url + 'getUserID', {id:id});
  }

  getAllUserEmail(){
    return this.http.get(this.url + 'getUserEmail');
  }
}
