import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  @Input() numOfUsers: number = 0;
  private localStorageKey = 'users';

  private apiUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}
  private getStoredUsers(): User[] {
    const storedUsers = localStorage.getItem(this.localStorageKey);
    return storedUsers ? JSON.parse(storedUsers) : [];
  }

  private setStoredUsers(users: User[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(users));
  }

  getAllUsers(): Observable<{ data: User[] }> {
    const usersArray = this.getStoredUsers();
    if (usersArray.length) {
      return of({ data: usersArray });
    } else {
      return this.http
        .get<{ data: User[] }>(`${this.apiUrl}?per_page=12`)
        .pipe(tap((response) => this.setStoredUsers(response.data))); // Save fetched users to local storage
    }
  }

  getUserById(id: number): Observable<{ data: User }> {
    const user = this.getStoredUsers().find((user) => user.id === id);
    if (user) {
      return of({ data: user });
    } else {
      return this.http.get<{ data: User }>(`${this.apiUrl}/${id}`).pipe(
        tap((response) => {
          const usersArray = this.getStoredUsers();
          this.setStoredUsers([...usersArray, response.data]);
        })
      );
    }
  }

  saveUser(user: User): Observable<void> {
    const usersArray = this.getStoredUsers();

    if (user.id) {
      this.updateUser(user);
    } else {
      user.id = usersArray.length > 0 ? usersArray.length + 1 : 1;
      this.setStoredUsers([...usersArray, user]);
    }

    return of(void 0);
  }

  updateUser(user: User): Observable<void> {
    const usersArray = this.getStoredUsers();
    const index = usersArray.findIndex((u) => u.id === user.id);

    if (index > -1) {
      usersArray[index] = user;
      this.setStoredUsers(usersArray);
    } else {
      console.error('User ID not found for update');
    }

    return of(void 0);
  }
}
