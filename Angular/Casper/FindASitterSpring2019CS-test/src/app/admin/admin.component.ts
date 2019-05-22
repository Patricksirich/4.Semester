import { Component, OnInit } from '@angular/core';
import { TempDataService } from '../service/temp-data.service';
import { Admin} from '../entities/admin';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
  admin: Admin;

  constructor() { }

  ngOnInit() {
    this.admin;
  }

}
