import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { AdminService } from '../service/admin.service';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router, private adminService: AdminService, private authService: AuthService, private snackBar: MatSnackBar) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.authService.isLoggedIn) {
        console.log("Logged in as Auth as well")
      }
      console.log("Trying to log in as admin");
      if(this.adminService.isLoggedIn) {
        console.log("Logged in as admin");
        return true;
      }

      this.adminService.redirectUrl = state.url;

      this.snackBar.open('You must be logged in as an admin to use this service', 'Close', {
        duration: 2000,
      });
      return false; // true = allowed access
    }
}
