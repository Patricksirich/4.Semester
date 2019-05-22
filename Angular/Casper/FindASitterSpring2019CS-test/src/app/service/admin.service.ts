import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  isLoggedIn: boolean = false;
  // store URL in a string for redirection
  redirectUrl: string;

  login(): Observable<boolean> {
    // call a webservice to login
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = true)
    );
  }
}
