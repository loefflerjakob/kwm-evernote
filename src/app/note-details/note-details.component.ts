import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note, Todo } from '../shared/note';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NoteService } from '../shared/note.service';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';
import { NoteFactory } from '../shared/note-factory';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoFactory } from '../shared/todo-factory';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'bs-note-details',
  standalone: true,
  imports: [
    RouterLink,
    TodoListItemComponent,
    TodoListComponent
  ],
  templateUrl: './note-details.component.html',
  styles: ``
})
export class NoteDetailsComponent implements OnInit {
  note: Note = NoteFactory.empty();

  constructor(
    private ns: NoteService,
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthenticationService

  ) { }

  ngOnInit() {

    const params = this.route.snapshot.params;
    this.ns.getSingle(params['id'])
      .subscribe((n: Note) => this.note = n);
  }


  removeNote() {
    if (confirm('Are you sure to delete Note?')) {
      this.ns.remove(this.note.id)
        .subscribe((res: any) => this.router.navigate(['../'], {
          relativeTo:
            this.route
        }));
    }
  }

}
