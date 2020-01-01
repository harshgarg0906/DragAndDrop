import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'draganddrop';

  toDoList=[
    'Morning Walk',
    'Breakfest',
    'Lunch',
     'Chatting',
     'Dinner' 
  ]

  completed=[
    'sleep'
  ]

  onDropListItem(event:CdkDragDrop<string[]>)
  {
      if(event.previousContainer===event.container)
      {
        moveItemInArray(this.toDoList,event.previousIndex,event.currentIndex);
      }
      else{
        transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex)
      }
      
      console.log("this is the list of the complete task"+this.completed)
      console.log("this is the pending task in the list"+this.toDoList)
  }
}
