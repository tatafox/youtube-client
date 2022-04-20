import { Component } from '@angular/core';
import {
  AbstractControl, FormBuilder, ValidatorFn, Validators,
} from '@angular/forms';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent {
  public adminPageForm = this.formBuilder.group({
    title: [
      null,
      [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(3),
      ],
    ],
    description: [
      null,
      [
        Validators.maxLength(255),
      ],
    ],
    img: [
      null,
      [
        Validators.required,
        AdminPageComponent.urlValidator,
      ],
    ],
    linkVideo: [
      null,
      [
        Validators.required,
        AdminPageComponent.urlValidator,
      ],
    ],
    date: [
      null,
      [
        Validators.required,
        AdminPageComponent.dateValidator,
      ],
    ],
  });

  constructor(private formBuilder: FormBuilder) { }

  public submitAdminPageForm() {
    console.log(this.adminPageForm);
  }

  static urlValidator: ValidatorFn = (control: AbstractControl) => {
    let validUrl = true;

    try {
      // eslint-disable-next-line no-new
      new URL(control.value);
    } catch {
      validUrl = false;
    }

    return validUrl ? null : { invalidUrl: true };
  };

  static dateValidator: ValidatorFn = (control: AbstractControl) => {
    let validDate = true;

    try {
      control.value.getTime();
    } catch {
      validDate = false;
    }

    return validDate ? null : { invalidDate: true };
  };
}
