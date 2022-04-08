import { Component } from '@angular/core';
import { IUser } from "../../../../shared/models/user.models";
import { UserService } from "../../../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) { }

  public clickLogOut(): void {
    this.userService.logOut();
    this.router.navigate(['login']);
  }
}
