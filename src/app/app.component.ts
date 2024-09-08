import { Component, ViewChild } from '@angular/core';
import { UserListComponent } from './components/user-list/user-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: `./app.component.css`,
})
export class AppComponent {
  @ViewChild(UserListComponent) userListComponent!: UserListComponent;

  handleSearch(id: number | null): void {
    if (this.userListComponent && this.userListComponent.handleSearch) {
      this.userListComponent.handleSearch(id);
    }
  }
}
