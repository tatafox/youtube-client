import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from "../../../core/services/user.service";
import { IUser } from "../../../shared/models/user.models";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  loginFormControl = new FormControl('', [Validators.required]);

  constructor(private userService: UserService) {
  }

  public clickLogin(name: string, password: string): void {
    const user: IUser = {
      name,
      password,
    }
    this.userService.loginUser(user);
  }

}

