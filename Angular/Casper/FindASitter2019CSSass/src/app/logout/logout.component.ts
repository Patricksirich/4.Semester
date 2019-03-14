import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit{

  ngOnInit(){
    console.log("Test for logout component")
  }

  constructor(private router: Router, private authservice: AuthService, private adminservice: AdminService) { }

  onSubmit() : void{
      console.log("trying to log admin out");
      this.adminservice.logout()
        console.log("Admin logout");

      console.log("trying to log Auth out");
      this.authservice.logout()
        console.log("Auth logout");

        this.router.navigate(['']);
      };
}
