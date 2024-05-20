import { Component, Input } from '@angular/core';
import { Note } from '../shared/kwmlist';
import { NoteFactory } from '../shared/note-factory';
import { NoteService } from '../shared/note.service';

@Component({
  selector: 'a.bs-note-list-item',
  standalone: true,
  imports: [],
  templateUrl: './note-list-item.component.html',
  styles: ``
})
export class NoteListItemComponent {
 @Input() note:Note = NoteFactory.empty();

}
