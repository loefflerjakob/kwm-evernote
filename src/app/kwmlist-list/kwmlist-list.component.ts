import { Component } from '@angular/core';
import { Kwmlist, Note } from '../shared/kwmlist';
import { Tag, Todo } from '../shared/note';

@Component({
  selector: 'bs-kwmlist-list',
  standalone: true,
  imports: [],
  templateUrl: './kwmlist-list.component.html',
  styles: ``
})
export class KwmlistListComponent {

  kwmlists: Kwmlist[] = [];

  ngOnInit() {
    this.kwmlists = [
      new Kwmlist (
        1,
        'New List',
        false,
        [
          new Note(
          1,
          'Shopping',
          101,
          'Everything for Shopping',
          'https://picsum.photos/200',
          [new Todo(
            1,
            'Buy groceries',
            true,
            101,
            'Remember to buy eggs and milk',
            new Date('2024-04-25 12:17:33'),
            'https://picsum.photos/200',
            [new Tag(1, "Shopping"), new Tag(2, "Private")]
          ),
          new Todo(
            2,
            'Send the report',
            false,
            102,
            'Complete the annual report before sending',
            new Date('2024-04-25 12:17:33'),
            'https://picsum.photos/200',
            [new Tag(1, "Work")]
          )],
          [new Tag(1, "Shopping"), new Tag(2, "Private")]
        ),
        new Note(
          1,
          'Shopping',
          101,
          'Everything for Shopping',
          'https://picsum.photos/200',
          [new Todo(
            1,
            'Buy groceries',
            true,
            101,
            'Remember to buy eggs and milk',
            new Date('2024-04-25 12:17:33'),
            'https://picsum.photos/200',
            [new Tag(1, "Shopping"), new Tag(2, "Private")]
          ),
          new Todo(
            2,
            'Send the report',
            false,
            102,
            'Complete the annual report before sending',
            new Date('2024-04-25 12:17:33'),
            'https://picsum.photos/200',
            [new Tag(1, "Work")]
          )],
          [new Tag(1, "Shopping"), new Tag(2, "Private")]
        )
      ],
      ),
      new Kwmlist (
        1,
        'New List',
        false,
        [new Note(
          1,
          'Shopping',
          101,
          'Everything for Shopping',
          'https://picsum.photos/200',
          [new Todo(
            1,
            'Buy groceries',
            true,
            101,
            'Remember to buy eggs and milk',
            new Date('2024-04-25 12:17:33'),
            'https://picsum.photos/200',
            [new Tag(1, "Shopping"), new Tag(2, "Private")]
          ),
          new Todo(
            2,
            'Send the report',
            false,
            102,
            'Complete the annual report before sending',
            new Date('2024-04-25 12:17:33'),
            'https://picsum.photos/200',
            [new Tag(1, "Work")]
          )],
          [new Tag(1, "Shopping"), new Tag(2, "Private")]
        )],
      )

    ]
  }
}
