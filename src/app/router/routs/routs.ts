import {Routes} from '@angular/router';
import {CommentComponent} from '../../app/components/comment/comment.component';
import {PostComponent} from '../../app/components/post/post.component';
import {UserComponent} from '../../app/components/user/user.component';
import {PostResolverService} from '../../services/post/post-resolver.service';
import {CommentResolverService} from '../../services/comment/comment-resolver.service';
import {UserResolverService} from '../../services/user/user-resolver.service';

export const routes: Routes = [
  {path: 'users', component: UserComponent, resolve: {allUsers: UserResolverService}},
  {path: 'posts', component: PostComponent, resolve: {allPosts: PostResolverService}},
  {path: 'comments', component: CommentComponent, resolve: {allComments: CommentResolverService}},
];
