import { Component, OnInit } from '@angular/core';
import { TagService } from '../shared/tag.service';
import { Tag } from '../shared/tag';

@Component({
  selector: 'bs-tag-list',
  standalone: true,
  imports: [],
  templateUrl: './tag-list.component.html',
  styles: ``
})
export class TagListComponent implements OnInit {
  tags: Tag[] = [];

  constructor(private ts: TagService) {

  }

  ngOnInit() {
   this.tags = this.ts.getAll();
  }
}