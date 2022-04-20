import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { IUser } from '../../shared/models/user.models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user!: IUser | null;

  private userStream$ = new BehaviorSubject<IUser | null>(null);

  constructor(private router: Router) {
    this.tryLogin();
  }

  private tryLogin(): boolean {
    const user: IUser | null = this.getUsersFromLocalStorage();

    if (!user) {
      return false;
    }

    this.user = user;
    this.userStream$.next(this.user);
    return !!this.user;
  }

  public saveUserToLocalStorage(): void {
    window.localStorage.setItem('user', JSON.stringify(this.user));
  }

  private getUsersFromLocalStorage(): IUser | null {
    if (!window.localStorage.length) {
      return null;
    }
    const user: string | null = window.localStorage.getItem('user');
    if (!user) {
      return null;
    }
    return JSON.parse(user);
  }

  public loginUser(user: IUser): boolean {
    if (this.getUsersFromLocalStorage()) {
      return false;
    }

    this.user = user;
    this.userStream$.next(user);
    this.saveUserToLocalStorage();
    this.router.navigate(['home']);

    return true;
  }

  public logOut(): void {
    window.localStorage.clear();
    this.userStream$.next(null);
    this.user = null;
  }

  public isLogin(): boolean {
    return !!this.user;
  }

  public getUserStream(): Observable<IUser | null> {
    return this.userStream$;
  }
}
