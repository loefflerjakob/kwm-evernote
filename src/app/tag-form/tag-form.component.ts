import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TagFactory } from '../shared/tag-factory';
import { TagService } from '../shared/tag.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tag } from '../shared/tag';
import { ErrorMessages } from '../error-messages';

@Component({
  selector: 'bs-tag-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './tag-form.component.html',
  styles: ``
})
export class TagFormComponent {
  tagForm: FormGroup;
  tag = TagFactory.empty();
  errors: { [key: string]: string } = {};
  isUpdatingTag = false;

  constructor(
    private fb: FormBuilder,
    private ts: TagService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.tagForm = this.fb.group({});
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isUpdatingTag = true;
      this.ts.getSingle(id).subscribe(tag => {
        this.tag = tag;
        this.initTag();
      })
    }
    this.initTag();
  }

  initTag() {
    this.tagForm = this.fb.group({
      id: this.tag.id,
      name: [this.tag.name, Validators.required]
    });
    this.tagForm.statusChanges.subscribe(() =>
      this.updateErrorMessages());
  }

  submitForm() {
    const tag: Tag = TagFactory.fromObject(this.tagForm.value);

    if (this.isUpdatingTag) {
      this.ts.update(tag).subscribe(res => {
        this.router.navigate(["../../../tags"], {
          relativeTo: this.route
        });
      });
    } else {
      this.ts.create(tag).subscribe(res => {
        this.tag = TagFactory.empty();
        this.tagForm.reset(TagFactory.empty());
        this.router.navigate(["../../tags"], { relativeTo: this.route });
      });
    }
  }

  updateErrorMessages() {
    this.errors = {};
    for (const message of ErrorMessages) {
      const control = this.tagForm.get(message.forControl);
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