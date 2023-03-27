import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   values:any

  constructor() { }

  ngOnInit(): void {
  }
  //get value from side-nav component
  getValue(value:any){
    console.log(value);
   this.values = value
  }

}
