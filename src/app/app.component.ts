import { Component } from '@angular/core';
import { moveItemInArray, transferArrayItem, CdkDragDrop } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { AddtaskComponent } from './addtask/addtask.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'KanbanBoard';

  value:string='';

  task:string='';

  currentTask:string='';

  indexOfList:number=0;

  nextIndex:number;

  mb:boolean=true;
  mf:boolean=true;
  dl:boolean=false;

  backlog=["Learn Angular","Watch Tenet tonight"];
  todo=["Master CSS","John Doe","John Wick"];
  ongoing=["Learn Angular Material"];
  done=["Anuglar Components"];


  constructor(public dialog: MatDialog){
    
  }

  receiveMessage($event) {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddtaskComponent, {
      width: '400px',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.addTask(result);
      
      
    });
  }

  opench()
  {
    console.log("Sdsdsdsds");
    
  }



  getArrayElement(arr,index)
  {
    if(arr == 0 )
    {
      
      return this.backlog.splice(index, 1)+"";
    }
      
    if(arr == 1 )
    {
      return this.todo.splice(index, 1)+"";
    }
    if(arr == 2 )
    {
      return this.ongoing.splice(index, 1)+"";
    }
    if(arr == 3 )
    {
      return this.done.splice(index, 1)+"";
    }
    
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    
    console.log(event.previousContainer.id);
    console.log(event.container.id);

    

    let prev=event.previousContainer.id.split('-')[3];
    let current=event.container.id.split('-')[3];
    

    switch(current)
    {
      case '0':
        this.backlog.splice(event.currentIndex, 0,this.getArrayElement(prev,event.previousIndex));
        break;
      case '1':
        this.todo.splice(event.currentIndex, 0,this.getArrayElement(prev,event.previousIndex));
        break;
      case '2':
        this.ongoing.splice(event.currentIndex, 0,this.getArrayElement(prev,event.previousIndex));
        break;
      case '3':
        this.done.splice(event.currentIndex, 0,this.getArrayElement(prev,event.previousIndex));
        break;
      default:
        console.log("error");   
    }

    


    

    
    // if (event.previousContainer === event.container) {
    //   moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    // } else {
    //   transferArrayItem(event.previousContainer.data,
    //                     event.container.data,
    //                     event.previousIndex,
    //                     event.currentIndex);
    // }
  }



  delIndex:number=0;
  

  
  

  addTask(task)
  {
    switch(task.type)
    {
      case 1:
        this.backlog.push(task.name);
        break;
      case 2:
        this.todo.push(task.name);
        break;
      case 3:
        this.ongoing.push(task.name);
        break;
      case 4:
        this.done.push(task.name);
        break;
      default:
        console.log("error");

        
      
    }
    
    
  }
}
