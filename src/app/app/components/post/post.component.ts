import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/user';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.post = this.activatedRoute.snapshot.data.allPosts;
  }

  ngOnInit(): void {

  }

}
