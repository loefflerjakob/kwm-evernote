import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Kwmlist } from '../shared/kwmlist';
import { KwmlistService } from '../shared/kwmlist.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NoteDetailsComponent } from '../note-details/note-details.component';
import { NoteListComponent } from '../note-list/note-list.component';
import { NoteListItemComponent } from '../note-list-item/note-list-item.component';

@Component({
  selector: 'bs-kwmlist-details',
  standalone: true,
  imports: [
    RouterLink, NoteListItemComponent
    ],
  templateUrl: './kwmlist-details.component.html',
  styles: ``
})
export class KwmlistDetailsComponent implements OnInit{

  kwmlist:Kwmlist | undefined;

  constructor (
    private  ks: KwmlistService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.kwmlist = this.ks.getSingle(params['id'])
  }

}
