import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {IComment} from '../../models/comment';
import {Observable} from 'rxjs';
import {CommentService} from './comment.service';

@Injectable({
  providedIn: 'root'
})
export class CommentResolverService implements Resolve<IComment[]>{

  constructor(private commentService: CommentService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IComment[]> | Promise<IComment[]> | IComment[] {
    return this.commentService.getComments();
  }
}
