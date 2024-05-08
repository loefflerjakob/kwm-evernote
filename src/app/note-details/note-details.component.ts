import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '../shared/note';

@Component({
  selector: 'bs-note-details',
  standalone: true,
  imports: [],
  templateUrl: './note-details.component.html',
  styles: ``
})
export class NoteDetailsComponent {
  @Input() note: Note | undefined;
 @Output() showListEvent = new EventEmitter<any>();
 
showNoteList() {
  this.showListEvent.emit();

}

}
