import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { PostComponent } from './components/post/post.component';
import {RouterModule} from '@angular/router';
import {routes} from '../router/routs/routs';
import { UserComponent } from './components/user/user.component';
import { CommentComponent } from './components/comment/comment.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    UserComponent,
    CommentComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
