import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo';
import { Tag } from '../shared/todo';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';

@Component({
  selector: 'bs-todo-list',
  standalone: true,
  imports: [
    TodoListItemComponent
  ],
  templateUrl: './todo-list.component.html',
  styles: ``
})
export class TodoListComponent implements OnInit{

  todos: Todo[] = [];


ngOnInit() {

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


}
