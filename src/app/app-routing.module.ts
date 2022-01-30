import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { UserListComponent } from './users/user-list/user-list.component';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'create', component: CreateUserComponent },
  { path: 'edit/:id', component: CreateUserComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
