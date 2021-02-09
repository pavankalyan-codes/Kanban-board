import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-mytoolbar',
  templateUrl: './mytoolbar.component.html',
  styleUrls: ['./mytoolbar.component.css'],
})
export class MytoolbarComponent implements OnInit {
  mycolor = 'red';

  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  constructor() {}

  ngOnInit(): void {}

  @Output() messageEvent = new EventEmitter<string>();

  addTask() {
    this.messageEvent.emit('adddtask');
  }

  changeColor() {
    if (this.mycolor == 'red') this.mycolor = 'white';
    else this.mycolor = 'red';
  }
}
