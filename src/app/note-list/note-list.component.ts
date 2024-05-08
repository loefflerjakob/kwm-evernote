import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Note, Tag, Todo } from '../shared/note';
import { NoteListItemComponent } from '../note-list-item/note-list-item.component';
import { NoteService } from '../shared/note.service';

@Component({
  selector: 'bs-note-list',
  standalone: true,
  imports: [
    NoteListItemComponent
  ],
  templateUrl: './note-list.component.html',
  styles: ``
})
export class NoteListComponent implements OnInit{

  notes: Note[] = [];
  @Output() showDetailsEvent = new EventEmitter<Note>();

  constructor (private ns: NoteService) {

  }

  showDetails(note: Note) {
    this.showDetailsEvent.emit(note);
  }

  ngOnInit(){
    this.notes = this.ns.getAll();
    
  }
}
