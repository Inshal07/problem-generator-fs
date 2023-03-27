import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {

  token!: string | null;

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
   this.token = localStorage.getItem('token');
  //  console.log(this.token);

  }

  logout(){
    localStorage.setItem('token', '');
    this.route.navigate(['login']);
  }

}
