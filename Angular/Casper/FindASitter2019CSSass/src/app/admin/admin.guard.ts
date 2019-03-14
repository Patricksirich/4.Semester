import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from './admin.service';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router, private adminService: AdminService, private authService: AuthService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isLoggedIn){
      console.log("Logged in as Auth aswell")
    }
    console.log("Admin activated");
    if (this.adminService.isLoggedIn) {
      console.log("Admin true")
      return true;
    }

    this.adminService.redirectUrl = state.url;

    this.router.navigate(["/home/login"]);
    return false; // true = allowed access -- false = denied access

  }
}
