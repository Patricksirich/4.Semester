import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../entities/user';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.sass']
})
export class DisplayUserComponent implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.snapshot.paramMap.get('id');
  }

}
