import { Component, OnInit } from '@angular/core';
import { TagService } from '../shared/tag.service';
import { Tag } from '../shared/tag';
import { TagListItemComponent } from '../tag-list-item/tag-list-item.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'bs-tag-list',
  standalone: true,
  imports: [
    TagListItemComponent,
    RouterLink
  ],
  templateUrl: './tag-list.component.html',
  styles: ``
})
export class TagListComponent implements OnInit {
  tags: Tag[] = [];

  constructor(private ts: TagService) {

  }

  ngOnInit() {
   this.ts.getAll().subscribe(res => this.tags = res)
  }

}