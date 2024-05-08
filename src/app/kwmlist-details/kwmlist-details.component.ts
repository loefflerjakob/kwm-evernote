import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Kwmlist } from '../shared/kwmlist';

@Component({
  selector: 'bs-kwmlist-details',
  standalone: true,
  imports: [],
  templateUrl: './kwmlist-details.component.html',
  styles: ``
})
export class KwmlistDetailsComponent {
  @Input() kwmlist: Kwmlist | undefined;
  @Output() showListEvent = new EventEmitter<any>();

  showKwmlistList() {
    this.showListEvent.emit();
  }

}
