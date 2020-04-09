import {Component} from '@angular/core';
import {CommentService} from '../services/comment/comment.service';
import {UserService} from '../services/user/user.service';
import {PostService} from '../services/post/post.service';
import {User} from '../models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project1';

  constructor() {

  }
}
