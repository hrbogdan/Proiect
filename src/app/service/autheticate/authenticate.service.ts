import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from 'src/app/model/signinData';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly mockedUser = new SignInData('hari', 'anosr');
  isAuthenticated = false;
  constructor(private router: Router) {}

  authenticate(signInData: SignInData): boolean {
    if (this.checkCredentials(signInData)) {
      this.isAuthenticated = true;
      this.router.navigate(['dashboard']);
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  private checkCredentials(signInData: SignInData): boolean {
    return (
      this.checkUser(signInData.getUser()) &&
      this.checkPassword(signInData.getPassword())
    );
  }

  private checkUser(user: string): boolean {
    return user === this.mockedUser.getUser();
  }

  private checkPassword(password: string): boolean {
    return password === this.mockedUser.getPassword();
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['admin-login']);
  }
}
