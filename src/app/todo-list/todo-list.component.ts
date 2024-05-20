import { Component, OnInit } from '@angular/core';
import { Tag, Todo } from '../shared/todo';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';
import { TodoService } from '../shared/todo.service';
import { RouterLink } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';
import { TagService } from '../shared/tag.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'bs-todo-list',
  standalone: true,
  imports: [
    TodoListItemComponent,
    RouterLink,
    NgFor,
    NgIf,
    FormsModule
  ],
  templateUrl: './todo-list.component.html',
  styles: ``
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filteredTodos: Todo[] = [];
  tags: Tag[] = [];
  selectedTags: { [key: string]: boolean } = {};

  constructor(
    private tagService: TagService,
    private ts: TodoService,
    public authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.ts.getAll().subscribe(res => {
      this.todos = res;
      this.filteredTodos = res;
    });
    this.tagService.getAll().subscribe(res => this.tags = res);
  }

  filterTodos() {
    const selectedTagKeys = Object.keys(this.selectedTags).filter(tag => this.selectedTags[tag]);
    if (selectedTagKeys.length > 0) {
      this.filteredTodos = this.todos.filter(todo => {
        if (!todo.tags) {
          return false;
        }
        const todoTagNames = todo.tags.map(tag => tag.name);
        return selectedTagKeys.every(tag => todoTagNames.includes(tag));
      });
    } else {
      this.filteredTodos = this.todos;
    }
  }

  trackById(index: number, item: Todo) {
    return item.id;
  }
}
