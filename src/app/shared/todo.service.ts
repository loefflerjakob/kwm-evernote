import { Injectable } from '@angular/core';
import { Tag, Todo } from './todo';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private api = 'http://kwm-evernote.s2110456017.student.kwmhgb.at/api';
  constructor(private http: HttpClient) { };


  getAll(): Observable<Array<Todo>> {
    return this.http.get<Array<Todo>>(`${this.api}/todos`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  getSingle(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.api}/todos/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.api}/todos/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }


}

/*
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
*/