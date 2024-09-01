import { Routes } from '@angular/router';
import { UserDetailsComponent } from './components/user-details/user-details.component';

export const routes: Routes = [
  {
    path: '',
    component: UserDetailsComponent,
  },
  {
    path: 'users/:id',
    component: UserDetailsComponent,
  },
];
