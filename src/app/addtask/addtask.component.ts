import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {


  task={
    name:'',
    type:''
  }
  types=[
    "backlog",
    "todo",
    "ongoing",
    "done"
  ]
  value:string='';

  constructor() { }


  ngOnInit(): void {
  }

}
