import { Component } from '@angular/core';
import { KwmlistService } from '../shared/kwmlist.service';
import { Kwmlist, Note } from '../shared/kwmlist';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NoteFactory } from '../shared/note-factory';
import { NoteService } from '../shared/note.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorMessages } from '../error-messages';
import { Tag } from '../shared/tag';
import { TagService } from '../shared/tag.service';


@Component({
  selector: 'bs-note-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './note-form.component.html',
  styles: ``
})
export class NoteFormComponent {
  kwmlists: Kwmlist[] = [];

  noteForm: FormGroup;
  note = NoteFactory.empty();
  errors: { [key: string]: string } = {};
  isUpdatingNote = false;
  tags: Tag[] = [];
  selectedTags: FormControl = new FormControl();


  constructor(
    private ks: KwmlistService,
    private ts: TagService,
    private fb: FormBuilder,
    private ns: NoteService,
    private route: ActivatedRoute,
    private router: Router,

  ) {
    this.noteForm = this.fb.group({});
  }

  initTags(tags: Tag[] | undefined): { id: number }[] {
    if (!tags) return [];
    return tags.map(tag => ({ id: tag.id }));
  }
  




  ngOnInit() {
    this.ks.getAll().subscribe(res => this.kwmlists = res);
    this.ts.getAll().subscribe(res => this.tags = res);
    const id = this.route.snapshot.params["id"];
    if (id) {
      this.isUpdatingNote = true;
      this.ns.getSingle(id).subscribe(note => {
        this.note = note;

        this.initNote();
      });
    } 
    this.initNote();
   }
 

  initNote() {

    let kwmlist_id_value;
    if(this.isUpdatingNote) {
      kwmlist_id_value = this.note.kwmlist_id;
    } else {
      kwmlist_id_value = '';
    } 


    this.noteForm = this.fb.group({
      id: this.note.id,
      title: [this.note.title, Validators.required],
      text: this.note.text,
      image_url: this.note.image_url,
      kwmlist_id: [kwmlist_id_value, Validators.required],
      tags: [this.initTags(this.note.tags)]
        });
    this.noteForm.statusChanges.subscribe(() =>
      this.updateErrorMessages());
  }

  

  submitForm() {
    const note: Note = NoteFactory.fromObject(this.noteForm.value);
    if(this.isUpdatingNote) {
      this.ns.update(note).subscribe(res => {
        this.router.navigate(["../../../kwmlists", note.kwmlist_id], {
          relativeTo: this.route
        })
      })
    } else {
      this.ns.create(note).subscribe(res => {
        this.note = NoteFactory.empty();
        this.noteForm.reset(NoteFactory.empty());
        this.router.navigate(["../../kwmlists", note.kwmlist_id], { relativeTo: this.route });
      })
    }
  }


  updateErrorMessages() {
    this.errors = {};
    for (const message of ErrorMessages) {
      const control = this.noteForm.get(message.forControl);
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