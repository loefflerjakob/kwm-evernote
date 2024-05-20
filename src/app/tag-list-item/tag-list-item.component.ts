import { Component, Input } from '@angular/core';
import { Tag } from '../shared/tag';
import { TagFactory } from '../shared/tag-factory';
import { TagService } from '../shared/tag.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'div.bs-tag-list-item',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './tag-list-item.component.html',
  styles: ``
})
export class TagListItemComponent {

  @Input() tag: Tag = TagFactory.empty();

  constructor(
    private ts: TagService,
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthenticationService

    ) { }

    removeTag() {
      if (confirm('Are you sure to delete Tag?')) {
      this.ts.remove(this.tag.id)
      .subscribe((res:any) => this.router.navigate(['../'], { relativeTo:
      this.route }));
      }

}
}
