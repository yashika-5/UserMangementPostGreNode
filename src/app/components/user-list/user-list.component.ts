import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserStore } from '../../store/user.store';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {

  displayedColumns = ['id', 'firstName', 'lastName', 'email' ,'mobile', 'location', 'action'];


  people$ = this._userStore.people$;
  editedUser$ = this._userStore.editedUser$;
  editorId$ = this._userStore.editorId$
  
  constructor(private readonly _userStore: UserStore) { }

  editUser(id: number): void {
    this._userStore.editUser(id);
  }

}
