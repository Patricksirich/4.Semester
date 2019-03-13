import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

constructor(private router: Router, private AdminService: AdminService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("AdminGuard on duty here");
      if(this.AdminService.isLoggedIn){
        return true;
      }

      this.AdminService.redirectUrl = state.url;
 
      this.router.navigate(['home/login']);
    return false; // true => yes, you are allowed access, false means no!
  }
  
}
