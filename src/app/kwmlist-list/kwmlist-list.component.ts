import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Kwmlist, Note } from '../shared/kwmlist';
import { Tag, Todo } from '../shared/note';
import { KwmlistService } from '../shared/kwmlist.service';
import { KwmlistListItemComponent } from '../kwmlist-list-item/kwmlist-list-item.component';
import { RouterLink } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'bs-kwmlist-list',
  standalone: true,
  imports: [
    KwmlistListItemComponent,
    RouterLink
  ],
  templateUrl: './kwmlist-list.component.html',
  styles: ``
})
export class KwmlistListComponent implements OnInit{

  kwmlists: Kwmlist[] = [];

  constructor(
    private ks: KwmlistService,
    public authService: AuthenticationService

  ) {}


  ngOnInit() {
    this.ks.getAll().subscribe(res => this.kwmlists = res);  }
}
