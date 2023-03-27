import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  @Input() value:string ='';
  constructor() {
   }

  ngOnInit(): void {
    this.value = 'dashboard'
  }

  getRouteValue($event:any){
    this.value = $event;
  }

}
