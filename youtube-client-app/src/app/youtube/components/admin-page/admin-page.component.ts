import { Component } from '@angular/core';
import {
  AbstractControl, FormBuilder, ValidatorFn, Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { addCard, VideoState } from '../../../redux';
import { CustomItem, ICustomItem } from '../../../shared/models/custom-item.models';

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
  });

  constructor(private formBuilder: FormBuilder, private readonly store: Store<VideoState>) { }

  public submitAdminPageForm() {
    const newCard: ICustomItem = new CustomItem(
      this.adminPageForm.value.title,
      this.adminPageForm.value.description,
      this.adminPageForm.value.img,
      this.adminPageForm.value.linkVideo,
    );
    this.store.dispatch(addCard({ newCard }));
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
}
