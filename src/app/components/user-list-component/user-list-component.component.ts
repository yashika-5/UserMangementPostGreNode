import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserStore } from '../../store/user.store';

@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrls: ['./user-list-component.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponentComponent implements OnInit {
  displayedColumns = ['id', 'firstName', 'lastName', 'email' ,'mobile', 'location'];
  people$ = this._userStore.people$;

  constructor(private readonly _userStore: UserStore) { }

  ngOnInit(): void {
  }

}
