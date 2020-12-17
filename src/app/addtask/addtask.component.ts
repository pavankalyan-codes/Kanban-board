import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


export interface task {
  name: string;
  type: string;
}
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

  buttonName="Update Task"
  

  editingTodo:boolean=true;

  disableSelect:boolean=false;

  constructor(public dialogRef: MatDialogRef<AddtaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: task) { 

      if(data.name!='')
      {
        this.disableSelect=true;
      }
      this.task.name=data.name;
      if(data.type === '-1')
      {
        this.editingTodo=false;
        this.buttonName="Add Task"
      }
      else
      {
        this.task.type=data.type+1;
        this.editingTodo=true;
      }
        
      console.log(data);
      
      
      

  }


  ngOnInit(): void {
  }

}
