import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-mytoolbar',
  templateUrl: './mytoolbar.component.html',
  styleUrls: ['./mytoolbar.component.css']
})
export class MytoolbarComponent implements OnInit {

  mycolor='red';
  constructor() { }

  ngOnInit(): void {

  }

  @Output() messageEvent = new EventEmitter<string>();


  addTask(){
    console.log("hi");
    
    this.messageEvent.emit("adddtask")

  }

  changeColor()
  {
    if(this.mycolor=='red')
      this.mycolor='white';
    else
      this.mycolor='red'
  }

}
