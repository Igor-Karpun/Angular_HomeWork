import {Component} from '@angular/core';
import {CommentService} from '../Services/comment/comment.service';
import {UserService} from '../Services/user/user.service';
import {PostService} from '../Services/post/post.service';
import {UserModels} from '../Models/userModels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project1';
  users: UserModels[];

  constructor(private userService: UserService,
              private postService: PostService,
              private commentService: CommentService,) {

    userService.getUsers().subscribe(users => {
      postService.getPosts().subscribe(posts => {
        commentService.getComments().subscribe(commets => {


          for (let singleUser of users) {
            let newPostArray = [];
            for (let singlePost of posts) {
              if (singleUser.id === singlePost.userId) {
                let newCommentsArray = [];
                for (let singleCommet of commets) {
                  if (singleCommet.postId === singlePost.id) {
                    newCommentsArray.push(singleCommet);
                  }
                }
                singlePost.comments = newCommentsArray;
                newPostArray.push(singlePost);
              }
            }
            singleUser.posts = newPostArray;
          }
          this.users = users;
          console.log(this.users);
        });
      });
    });

  }
}
