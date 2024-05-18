import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { KwmlistFactory } from '../shared/kwmlist-factory';
import { KwmlistService } from '../shared/kwmlist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorMessages } from '../error-messages';
import { Kwmlist } from '../shared/kwmlist';

@Component({
  selector: 'bs-kwmlist-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './kwmlist-form.component.html',
  styles: ``
})
export class KwmlistFormComponent {
  kwmlistForm: FormGroup;
  kwmlist = KwmlistFactory.empty();
  errors: { [key: string]: string } = {};
  isUpdatingKwmlist = false;

  constructor(
    private fb: FormBuilder,
    private ks: KwmlistService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.kwmlistForm = this.fb.group({});
  }

  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    if (id) {
      this.isUpdatingKwmlist = true;
      this.ks.getSingle(id).subscribe(kwmlist => {
        this.kwmlist = kwmlist;
        this.initKwmlist();
      });
    }
    this.initKwmlist();
  }

  initKwmlist() {
    this.kwmlistForm = this.fb.group({
      id: this.kwmlist.id,
      name: [this.kwmlist.name, Validators.required],
      is_shared: [this.kwmlist.is_shared, Validators.required]
    });
    this.kwmlistForm.statusChanges.subscribe(() =>
      this.updateErrorMessages());
  }

  submitForm() {
    const kwmlist: Kwmlist = KwmlistFactory.fromObject(this.kwmlistForm.value);

    if (this.isUpdatingKwmlist) {
      this.ks.update(kwmlist).subscribe(res => {
        this.router.navigate(["../../../kwmlists"], {
          relativeTo: this.route
        });
      });
    } else {
      console.log(kwmlist);
      this.ks.create(kwmlist).subscribe(res => {
        this.kwmlist = KwmlistFactory.empty();
        this.kwmlistForm.reset(KwmlistFactory.empty());
        this.router.navigate(["../../kwmlists"], { relativeTo: this.route });
      });
    }
  }

  updateErrorMessages() {
    console.log("Is invalid? " + this.kwmlistForm.invalid);
    this.errors = {};
    for (const message of ErrorMessages) {
      const control = this.kwmlistForm.get(message.forControl);
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
