import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from '../schema/userLogin';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 authToken:any
  constructor(
    private authService: AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  loginForm:UserLogin | any = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('',Validators.required)
  })

  submitUserLogin(){
    localStorage.removeItem('token')

    this.authService.loginUser(this.loginForm.value).subscribe(
      res =>{
        console.log(res);
       this.authToken = res;
       localStorage.setItem('token', this.authToken.token);
       localStorage.setItem('Id', this.authToken.userId);
      },
      (err)=>{
        console.log(err);
      }

      )
      this.router.navigate(['']);
  }

}
