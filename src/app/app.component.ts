import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KanbanBoard';

  task:string='';

  currentTask:string='';

  indexOfList:number=0;

  nextIndex:number;

  mb:boolean=true;
  mf:boolean=true;
  dl:boolean=false;

  allTask=[
    ["Learn Angular","Watch Tenet tonight"],
    [''],
    [''],
    ['']
  ]

  delIndex:number=0;
  moveBack(taskName)
  {
      this.nextIndex=this.indexOfList-1;

      this.delIndex=this.allTask[this.indexOfList].indexOf(taskName);

      
      
      
      if(this.nextIndex >= 0)
      {

        //deleting from current list
        this.allTask[this.indexOfList].splice(this.delIndex, 1);

        //adding to next list
        this.allTask[this.nextIndex].push(taskName);
        console.log(this.allTask);

        this.indexOfList=this.nextIndex;
        
      }
  }
  moveForward(taskName)
  {
      console.log(taskName);
      //this.allTask[1].push(taskName);
      console.log(this.indexOfList+"----"+taskName);
      

      this.nextIndex=this.indexOfList+1;

      this.delIndex=this.allTask[this.indexOfList].indexOf(taskName);

      
      
      
      if(this.nextIndex < 4)
      {

        //deleting from current list
        this.allTask[this.indexOfList].splice(this.delIndex, 1);

        //adding to next list
        this.allTask[this.nextIndex].push(taskName);
        console.log(this.allTask);

        this.indexOfList=this.nextIndex;
        
      }
      
  }
  delete(taskName)
  {
    this.delIndex=this.allTask[this.indexOfList].indexOf(taskName);
    this.allTask[this.indexOfList].splice(this.delIndex, 1);
    this.currentTask='';
    this.indexOfList=0;
    this.dl=false;
  }
 
  manage(index,taskName)
  {
    this.currentTask=taskName;
    this.indexOfList=index;
    console.log(taskName);

    // if(this.indexOfList+1 >= 4)
    //   this.mf=false;
    // if(this.indexOfList-1 <= -1)
    //   this.mb=false;
    // if(this.currentTask!='')
    //   this.dl=true;
    
  }

  
  

  addTask()
  {
    if(this.task.trim()!='')
    {
      this.allTask[0].push(this.task);
      this.task='';
      this.currentTask='';
    }
    
    
  }
}
