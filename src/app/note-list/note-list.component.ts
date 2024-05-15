import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Note, Tag, Todo } from '../shared/note';
import { NoteListItemComponent } from '../note-list-item/note-list-item.component';
import { NoteService } from '../shared/note.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'div.bs-note-list',
  standalone: true,
  imports: [
    NoteListItemComponent,
    RouterLink
    ],
  templateUrl: './note-list.component.html',
  styles: ``
})
export class NoteListComponent implements OnInit{

  notes: Note[] = [];

  constructor (private ns: NoteService) {

  }

  ngOnInit(){
    this.ns.getAll().subscribe(res => this.notes = res);    
  }
}
