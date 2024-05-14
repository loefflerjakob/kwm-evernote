import { Injectable } from '@angular/core';
import { Tag, Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [];
  constructor() {
    this.todos = [
      new Todo(
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
      ),
      new Todo(
        3,
        'Plan weekend trip',
        true,
        103,
        'Discuss the trip itinerary with family',
        new Date('2024-04-25 12:17:33'),
        'https://picsum.photos/200',
        [new Tag(1, "Private"), new Tag(2, "Vacation")]
      )
    ];
   }

   getAll() {
    return this.todos;
   }

   getSingle(id: number) : Todo {
    return <Todo>this.todos.find(todo => todo.id == id);
   }
}
