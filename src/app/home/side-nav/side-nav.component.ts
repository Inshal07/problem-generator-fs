import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Output() value = new EventEmitter<any>() ;
  constructor() { }

  ngOnInit(): void {
  }

  gotoValue(value:string){
    this.value.emit(value);
  }

}
