import { Routes } from '@angular/router';
import { UsersComponent } from './Components/users/users.component';
import { UserComponent } from './Components/user/user.component';
import { ErrorComponent } from './Components/error/error.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { EditUserComponent } from './Components/edit-user/edit-user.component';

export const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'users/edit/:id', component: EditUserComponent },
  { path: '**', component: ErrorComponent },
];
