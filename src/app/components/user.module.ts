import { NgModule } from '@angular/core';
import { PaginationComponent } from './pagination/pagination.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent,
    PaginationComponent,
    UserComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [UserListComponent, UserDetailsComponent],
})
export class UserModule {}
