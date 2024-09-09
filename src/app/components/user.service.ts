import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  @Input() user!: User;
  @Input() numOfUsers: number = 0;
  private apiUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUsers(page: number = 1, itemsPerPage: number = 5): Observable<any> {
    return this.http.get(
      `${this.apiUrl}?page=${page}&per_page=${itemsPerPage}`
    );
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  setUser(user: any) {
    this.user = user;
  }
}
