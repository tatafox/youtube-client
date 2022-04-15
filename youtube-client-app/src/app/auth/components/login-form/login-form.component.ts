import { Component } from '@angular/core';
import {
  FormBuilder, FormControl, ValidationErrors, Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../core/services/user.service';
import { IUser } from '../../../shared/models/user.models';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  loginFormControl = new FormControl('', [Validators.required]);

  public loginForm = this.formBuilder.group({
    username: [
      null,
      [
        Validators.required,
        Validators.email,
      ],
    ],
    password: [
      null,
      [
        Validators.required,
        LoginFormComponent.passwordValidator,
      ],
    ],
  });

  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {}

  public submitLoginForm(name: string, password: string): void {
    const user: IUser = {
      name,
      password,
    };
    const isLogin: boolean = this.userService.loginUser(user);
    if (!isLogin) {
      // eslint-disable-next-line no-alert
      alert('You are already logged in');
      this.router.navigate(['home']);
    }
  }

  static passwordValidator(control: FormControl): ValidationErrors | null {
    const isSpace = (control.value || '').trim().includes(' ');
    const isValid = (control.value || '').match(/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}$/);
    return !isSpace && isValid ? null : { password: true };
  }
}
