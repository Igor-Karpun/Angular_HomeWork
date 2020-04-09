import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommentService} from '../../../services/comment/comment.service';
import {PostService} from '../../../services/post/post.service';
import {IComment} from '../../../models/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comment: IComment[];

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
    this.comment = this.activatedRoute.snapshot.data.allComments;
  }

  ngOnInit(): void {
  }

}
