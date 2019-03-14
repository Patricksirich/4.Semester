import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): Observable<boolean> {
    // here we want to call a webservice to login
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = true)
    );
  }
// Removable (auth can be used)
  logout(): void {
    this.isLoggedIn = false;
    console.log("logout", this.isLoggedIn);
  }
}