import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  host = 'http://localhost:3001';
  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${this.host}/users`).pipe(map((res) => res));
  }

  addUser(username: string, password: string) {
    return this.http.post(`${this.host}/users`, {
      user: username,
      password: password,
    });
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.host}/users/${id}`);
  }

}
