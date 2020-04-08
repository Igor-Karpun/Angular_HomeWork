import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommentModels} from '../../Models/commentModels';
import {UserModels} from '../../Models/userModels';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getUsers (){
    return this.http.get<UserModels[]>('https://jsonplaceholder.typicode.com/users')
  }
}
