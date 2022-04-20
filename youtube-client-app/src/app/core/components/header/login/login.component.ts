import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public userName: string | null = null;

  public subscriptions: Subscription = new Subscription();

  constructor(private userService: UserService, private router: Router) {
  }

  public ngOnInit(): void {
    this.userService.getUserStream()
      .subscribe((user) => {
        const newUser = user?.name ? (this.userName = user?.name) : (this.userName = null);
        return newUser;
      });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public clickLogOut(): void {
    this.userService.logOut();
    this.router.navigate(['login']);
  }

  public clickLogIn(): void {
    this.router.navigate(['login']);
  }

  public clickAdminPage(): void {
    this.router.navigate(['admin-page']);
  }
}
