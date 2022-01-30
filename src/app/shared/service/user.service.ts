import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [];
   apiPrefix : string = "http://localhost:3300";
  constructor(private http: HttpClient) { }

  getUsers(){
    return  this.http.get<User[]>(this.apiPrefix + '/users');
  }
  addUser(body:User){
    return  this.http.post(this.apiPrefix + '/users',body);
  }
  updateUser(id:number,body:User){
    return  this.http.put(this.apiPrefix + `/users/${id}`,body);
  }
  deleteUser(id:number){
    return  this.http.delete(this.apiPrefix + `/users/${id}`);
  }
  getLocalUsers() {
    return this.users;
  }
  getUserById(id: number){
    return  this.http.get<User>(this.apiPrefix + `/users/${id}`);
  }
}
