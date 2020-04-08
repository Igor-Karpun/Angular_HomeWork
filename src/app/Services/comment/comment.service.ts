import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommentModels} from '../../Models/commentModels';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {}

  getComments (){
    return this.http.get<CommentModels[]>('https://jsonplaceholder.typicode.com/comments')
  }

}

