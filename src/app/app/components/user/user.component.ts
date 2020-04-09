import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user : User[]

  constructor(private activatedRoute: ActivatedRoute) {
    this.user = activatedRoute.snapshot.data.allUsers
  }

  ngOnInit(): void {
  }

}
