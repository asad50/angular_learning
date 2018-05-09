import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First App';
  todoList= [];
  localStorageData = localStorage.toDoList;
  
  addToDo(newToDo: string) {
    console.log("LocalStorage: ");
    console.log(localStorage.toDoList);
    if (newToDo) {
      if(localStorage.toDoList == undefined){
        localStorage.toDoList = [];
      }
      this.todoList.push(newToDo);
      console.log(this.todoList);
      localStorage.setItem("toDoList", JSON.stringify(this.todoList));
      //localStorage.toDoList = this.todoList;
      //localStorage.toDoList.push(newToDo);
      //this.todoList = localStorage.toDoList;
      //this.todoList.push(newToDo);
      //console.log(this.todoList);
      //localStorage.toDoList = this.todoList;
    }
  }
  ngOnInit() {
    var data = localStorage.getItem("toDoList");
    if(data != undefined && data != '' ){
      this.todoList = JSON.parse(localStorage.getItem("toDoList"));
      console.log("To Do List");
      console.log(this.todoList);
    }
    
  }
}
