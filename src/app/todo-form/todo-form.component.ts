import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TodoFactory } from '../shared/todo-factory';
import { Tag } from '../shared/tag';
import { TodoService } from '../shared/todo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorMessages } from '../error-messages';
import { Todo } from '../shared/todo';
import { TagService } from '../shared/tag.service';
import { Note } from '../shared/note';
import { NoteService } from '../shared/note.service';

@Component({
  selector: 'bs-todo-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo-form.component.html',
  styles: ``
})
export class TodoFormComponent {
  notes: Note[] = [];

  todoForm: FormGroup;
  todo = TodoFactory.empty();
  errors: { [key: string]: string } = {};
  isUpdatingTodo = false;
  tags: Tag[] = [];
  selectedTags: FormControl = new FormControl();

  constructor(
    private ns: NoteService,
    private ts: TodoService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private tas: TagService,


  ) {
    this.todoForm = this.fb.group({});
  }

  initTags(tags: Tag[] | undefined): { id: number }[] {
    if (!tags) return [];
    return tags.map(tag => ({ id: tag.id }));
  }

  ngOnInit() {
    this.tas.getAll().subscribe(res => this.tags = res);
    this.ns.getAll().subscribe(res => this.notes = res);
    const id = this.route.snapshot.params["id"];
    if (id) {
      this.isUpdatingTodo = true;
      this.ts.getSingle(id).subscribe(todo => {
        this.todo = todo;

        this.initTodo();
      });
    }
    this.initTodo();
  }

  initTodo() {

    let note_id_value;
    if (this.isUpdatingTodo) {
      note_id_value = this.todo.note_id;
    } else {
      note_id_value = null;
    }

    let tag_id_value;
    if (this.isUpdatingTodo) {
      tag_id_value = this.todo.tags;
    } else {
      tag_id_value = null;
    }

    this.todoForm = this.fb.group({
      id: this.todo.id,
      title: [this.todo.title, Validators.required],
      text: this.todo.text,
      due_date: this.todo.due_date,
      is_shared: this.todo.is_shared,
      note_id: note_id_value,
      image_url: this.todo.image_url,
      tags: tag_id_value

    });
    this.todoForm.statusChanges.subscribe(() =>
      this.updateErrorMessages());
  }


  submitForm() {
    const todo: Todo = TodoFactory.fromObject(this.todoForm.value);
    if (this.isUpdatingTodo) {
      this.ts.update(todo).subscribe(res => {
        this.router.navigate(["../../../todos"], {
          relativeTo: this.route
        })
      })
    } else {
      this.ts.create(todo).subscribe(res => {
        this.todo = TodoFactory.empty();
        this.todoForm.reset(TodoFactory.empty());
        this.router.navigate(["../../todos"], { relativeTo: this.route });
      })
    }
  }








  updateErrorMessages() {
    this.errors = {};
    for (const message of ErrorMessages) {
      const control = this.todoForm.get(message.forControl);
      if (
        control &&
        control.dirty &&
        control.invalid && control.errors &&
        control.errors[message.forValidator] &&
        !this.errors[message.forControl]
      ) {
        this.errors[message.forControl] = message.text;
      }
    }
  }
}






