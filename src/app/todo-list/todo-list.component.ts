import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';
import { TodoService } from '../shared/todo.service';
import { RouterLink } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'bs-todo-list',
  standalone: true,
  imports: [
    TodoListItemComponent,
    RouterLink
  ],
  templateUrl: './todo-list.component.html',
  styles: ``
})
export class TodoListComponent implements OnInit{

  todos: Todo[] = [];

  constructor(private ts: TodoService,
    public authService: AuthenticationService

  ) {}


ngOnInit() {

  this.ts.getAll().subscribe(res => this.todos = res);}


}
