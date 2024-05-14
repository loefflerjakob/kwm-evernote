import { Injectable } from '@angular/core';
import { Tag } from './tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  tags: Tag [] = [];

  constructor() {
    this.tags = [
      new Tag (1, "Priority 1"),
      new Tag (2, "Priority 2"),
      new Tag (3, "Priority 3")
    ]
  }

  getAll() {
    return this.tags;
  }

  getSingle(id: number): Tag {
    return <Tag>this.tags.find(tag => tag.id == id);

  }
}
