import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../model/user.model';
import { UserStore } from '../../store/user.store';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEditComponent implements OnInit {
  @Input() user: User;
  userForm!: FormGroup;

  constructor(private readonly userStore: UserStore) {
  }
  ngOnInit(): void {
    console.log(this.user);
  
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      mobile: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.maxLength(10)]),
      location: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')])
    });
    this.userForm.setValue({
      'firstName':this.user['firstName'],
      'lastName':this.user['lastName'],
      'email':this.user['email'],
      'mobile':this.user['mobile'],
      'location':this.user['location']
    });
  }

  userEdited() {
    this.userStore.setEditedUser(this.user);
  }

  cancel() {
    this.userStore.cancelEditUser();
  }

  save() {
    this.userStore.saveEditUser();
  }

}
