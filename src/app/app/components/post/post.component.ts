import {Component, Input, OnInit} from '@angular/core';
import {UserModels} from '../../../Models/userModels';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  @Input()
  user: UserModels;

  constructor() {
  }

  ngOnInit(): void {

  }

}
