import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';
import { UserStore } from '../../store/user.store';

@Component({
  selector: 'app-user-container-component',
  templateUrl: './user-container-component.component.html',
  styleUrls: ['./user-container-component.component.css'],
  providers: [UserStore],
})
export class UserContainerComponentComponent implements OnInit {

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
