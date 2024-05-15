import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Kwmlist } from '../shared/kwmlist';
import { KwmlistService } from '../shared/kwmlist.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NoteDetailsComponent } from '../note-details/note-details.component';
import { NoteListComponent } from '../note-list/note-list.component';
import { NoteListItemComponent } from '../note-list-item/note-list-item.component';
import { KwmlistFactory } from '../shared/kwmlist-factory';

@Component({
  selector: 'bs-kwmlist-details',
  standalone: true,
  imports: [
    RouterLink, NoteListItemComponent
  ],
  templateUrl: './kwmlist-details.component.html',
  styles: ``
})
export class KwmlistDetailsComponent implements OnInit {

  kwmlist: Kwmlist = KwmlistFactory.empty();

  constructor(
    private ks: KwmlistService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.ks.getSingle(params['id'])
      .subscribe((k: Kwmlist) => this.kwmlist = k);
  }

  removeKwmlist() {
    if (confirm('Are you sure to delete Kwmlist?')) {
      this.ks.remove(this.kwmlist.id)
        .subscribe((res: any) => this.router.navigate(['../'], {
          relativeTo:
            this.route
        }));
    }
  }
}