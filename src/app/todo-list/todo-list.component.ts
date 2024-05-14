import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo';
import { Tag } from '../shared/todo';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'bs-todo-list',
  standalone: true,
  imports: [
    TodoListItemComponent
  ],
  templateUrl: './todo-list.component.html',
  styles: ``
})
export class TodoListComponent implements OnInit{

  todos: Todo[] = [];

  constructor(private ts: TodoService) {}


ngOnInit() {

  this.todos = this.ts.getAll();
}


}
