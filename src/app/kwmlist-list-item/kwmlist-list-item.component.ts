import { Component, Input } from '@angular/core';
import { Kwmlist } from '../shared/kwmlist';

@Component({
  selector: 'a.bs-kwmlist-list-item',
  standalone: true,
  imports: [],
  templateUrl: './kwmlist-list-item.component.html',
  styles: ``
})
export class KwmlistListItemComponent {
  @Input() kwmlist: Kwmlist | undefined;
}
