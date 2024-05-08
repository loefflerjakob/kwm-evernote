import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Kwmlist, Note } from '../shared/kwmlist';
import { Tag, Todo } from '../shared/note';
import { KwmlistService } from '../shared/kwmlist.service';
import { KwmlistListItemComponent } from '../kwmlist-list-item/kwmlist-list-item.component';

@Component({
  selector: 'bs-kwmlist-list',
  standalone: true,
  imports: [
    KwmlistListItemComponent
  ],
  templateUrl: './kwmlist-list.component.html',
  styles: ``
})
export class KwmlistListComponent implements OnInit{

  kwmlists: Kwmlist[] = [];
  @Output() showDetailsEvent = new EventEmitter<Kwmlist>;

  constructor(private ks: KwmlistService) {}

  showDetails(kwmlist: Kwmlist) {
    this.showDetailsEvent.emit(kwmlist);
    }

  ngOnInit() {
    this.kwmlists = this.ks.getAll();
  }
}
