import { NgModule } from '@angular/core';
import { PaginationComponent } from './pagination/pagination.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from './shared-header.module';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent,
    PaginationComponent,
    UserComponent,
  ],
  imports: [CommonModule, FormsModule, HeaderModule],
  exports: [UserListComponent, UserDetailsComponent],
})
export class UserModule {}
