import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';
import { UserStore } from '../../store/user.store';

@Component({
  selector: 'app-user-container-component',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css'],
  providers: [UserStore],
})
export class UserContainerComponent implements OnInit {
  editedUser$ = this.userStore.editedUser$;

  constructor(
    private readonly userStore: UserStore,
    private readonly userService: UserService ) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (people) => {
        this.userStore.loadPeople(people);
      },
    });
  }

}
