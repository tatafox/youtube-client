import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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

  constructor(private userService: UserService, private router: Router) {
  }

  public clickLogin(name: string, password: string): void {
    const user: IUser = {
      name,
      password,
    };
    const isLogin: boolean = this.userService.loginUser(user);
    if (!isLogin) {
      alert('You are already logged in');
      this.router.navigate(['home']);
    }
  }
}
