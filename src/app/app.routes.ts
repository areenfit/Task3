import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { NewUserComponent } from './components/new-user/new-user.component';

export const routes: Routes = [
  {
    path: 'users',
    children: [
      {
        path: '',
        component: UserListComponent,
      },
      {
        path: 'add',
        component: NewUserComponent,
      },
      {
        path: ':id',
        component: UserDetailsComponent,
      },
    ],
  },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
];
