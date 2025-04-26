import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly URL = 'http://localhost:3000/users';
  constructor(private readonly http: HttpClient) {}
  getAllUsers() {
    return this.http.get(this.URL);
  }
  getUsersById(id: number) {
    return this.http.get(this.URL + '/' + id);
  }
  addUser(user: any) {
    return this.http.post(this.URL, user);
  }
  updateUser(id: number, data: any) {
    return this.http.patch(this.URL + '/' + id, data);
  }
  deleteUser(id: string) {
    return this.http.delete(this.URL + '/' + id);
  }
}
