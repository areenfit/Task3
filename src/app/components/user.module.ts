import { NgModule } from '@angular/core';
import { PaginationComponent } from './pagination/pagination.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HeaderComponent } from './header/header.component';
import { UserService } from './user.service';
import { RouterModule } from '@angular/router';
import { routes } from '../app.routes';
import { NewUserComponent } from './new-user/new-user.component';

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent,
    PaginationComponent,
    UserComponent,
    HeaderComponent,
    NewUserComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  providers: [UserService],
  exports: [UserListComponent, UserDetailsComponent],
})
export class UserModule {}
