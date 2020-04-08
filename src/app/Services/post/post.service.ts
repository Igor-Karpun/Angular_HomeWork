import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommentModels} from '../../Models/commentModels';
import {PostModels} from '../../Models/postModels';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {}

  getPosts (){
    return this.http.get<PostModels[]>('https://jsonplaceholder.typicode.com/posts')
  }
}
