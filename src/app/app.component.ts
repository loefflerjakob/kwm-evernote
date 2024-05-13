import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TagListComponent } from './tag-list/tag-list.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NoteListComponent } from './note-list/note-list.component';
import { KwmlistListComponent } from './kwmlist-list/kwmlist-list.component';
import { Note } from './shared/note';
import { NoteDetailsComponent } from "./note-details/note-details.component";
import { Kwmlist } from './shared/kwmlist';
import { KwmlistDetailsComponent } from "./kwmlist-details/kwmlist-details.component";

@Component({
    selector: 'bs-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterLink, RouterLinkActive, TagListComponent, TodoListComponent, NoteListComponent, KwmlistListComponent, NoteDetailsComponent, KwmlistDetailsComponent]
})
export class AppComponent {
  listOn = true;
  detailsOn = false;

  note: Note | undefined;
  kwmlist: Kwmlist | undefined;
  
  title = 'kwm-evernote';

  showList() {
    this.listOn = true;
    this.detailsOn = false;
  }

  /*
  showDetails(note: Note) {
    this.note = note;
    this.listOn = false;
    this.detailsOn = true;
  }
  */

  showDetails(kwmlist: Kwmlist) {
    this.kwmlist = kwmlist;
    this.listOn = false;
    this.detailsOn = true;
  }

}
