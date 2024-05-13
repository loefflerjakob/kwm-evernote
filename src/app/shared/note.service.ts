import { Injectable } from '@angular/core';
import { Note, Tag, Todo } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notes: Note [] = [];
  constructor() { 
    this.notes = [
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
        2,
        'Work',
        101,
        'List for all Work related things',
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
    ]
  }

  getAll() {
    return this.notes;
  }

  getSingle(id: number) : Note {
    return <Note>this.notes.find(note => note.id == id);

 }

}

