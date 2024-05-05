import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TagListComponent } from './tag-list/tag-list.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NoteListComponent } from './note-list/note-list.component';
import { KwmlistListComponent } from './kwmlist-list/kwmlist-list.component';

@Component({
  selector: 'bs-root',
  standalone: true,
  imports: [RouterOutlet, TagListComponent, TodoListComponent, NoteListComponent, KwmlistListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kwm-evernote';
}
