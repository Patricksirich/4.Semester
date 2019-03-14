import { Component, OnInit } from '@angular/core';
import { TempDataService } from '../service/temp-data.service';
import {Admin} from '../entities/admin';
import { from } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  admin: Admin;

  constructor(private tempData: TempDataService) { }

  ngOnInit() {
    this.admin = this.tempData.getAdmin();
  }

}
