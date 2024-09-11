import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { FormComponent } from './components/form/form.component';

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
        component: FormComponent,
      },
      {
        path: ':id',
        component: UserDetailsComponent,
      },
      {
        path: ':id/edit',
        component: FormComponent,
      },
    ],
  },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
];
