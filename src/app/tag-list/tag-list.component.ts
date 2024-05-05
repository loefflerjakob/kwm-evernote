import { Component, OnInit } from '@angular/core';
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

  ngOnInit() {
    this.tags = [
      new Tag(1, 'Mein erster Tag'),
      new Tag(2, 'Mein zweiter Tag'),
      new Tag(3, 'Mein dritter Tag')
    ];
  }
}