import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../shared/note';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NoteService } from '../shared/note.service';

@Component({
  selector: 'bs-note-details',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './note-details.component.html',
  styles: ``
})
export class NoteDetailsComponent implements OnInit {
  note: Note | undefined;

  constructor(
    private ns: NoteService,
    private route: ActivatedRoute
    ) { }

    ngOnInit() {
      const params = this.route.snapshot.params;
      this.note = this.ns.getSingle(params['id']);
      }

}
