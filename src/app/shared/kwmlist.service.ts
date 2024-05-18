import { Injectable } from '@angular/core';
import { Kwmlist, Note } from './kwmlist';
import { Tag, Todo } from './todo';
import { HttpClient } from '@angular/common/http';
import { Observable, retry, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KwmlistService {
  private api = 'http://kwm-evernote.s2110456017.student.kwmhgb.at/api';
  constructor(private http: HttpClient) { }


  getAll(): Observable<Array<Kwmlist>> {
    return this.http.get<Array<Kwmlist>>(`${this.api}/kwmlists`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  getSingle(id: number): Observable<Kwmlist> {
    return this.http.get<Kwmlist>(`${this.api}/kwmlists/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.api}/kwmlists/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  create(kwmlist: Kwmlist): Observable<any> {
    return this.http.post(`${this.api}/kwmlists`, kwmlist)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }
  update(kwmlist: Kwmlist): Observable<any> {
    return this.http.put(`${this.api}/kwmlists/${kwmlist.id}`, kwmlist)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }


  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }
}

