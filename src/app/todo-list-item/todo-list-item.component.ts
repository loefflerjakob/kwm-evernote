import { Component, Input } from '@angular/core';
import { Todo } from '../shared/todo';
import { TodoFactory } from '../shared/todo-factory';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TodoService } from '../shared/todo.service';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'div.bs-todo-list-item, a.bs-todo-list-item',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './todo-list-item.component.html',
  styles: ``
})
export class TodoListItemComponent {
  @Input() todo: Todo = TodoFactory.empty();

  constructor(
    private ts: TodoService,
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthenticationService

  ) { }


  removeTodo() {
    if (confirm('Are you sure to delete Todo?')) {
      this.ts.remove(this.todo.id)
        .subscribe((res: any) => this.router.navigate(['../'], {
          relativeTo:
            this.route
        }));
    }
  }
}
