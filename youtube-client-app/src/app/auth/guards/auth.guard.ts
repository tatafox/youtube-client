import {
  CanActivate, Router,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from '../../core/services/user.service';

@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {
  }

  public canActivate(): boolean {
    const isAllowed: boolean = this.userService.isLogin();
    if (isAllowed) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
