import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../schema/user';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router:Router
  ) {
  }

  ngOnInit(): void {
  }

  //list for Category
  categoryList: Array<string> = [
    "A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"
  ]
  //password confirm Variable


  userForm: User | any = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]),
    role: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword : new FormControl('')
  })



  submitUserDetail(){
    this.authService.createUser(this.userForm.value).subscribe(
      res => console.log(res),
    )
    this.router.navigate(['']);
  }



}
