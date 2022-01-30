import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/service/user.service';
import { UtilsService } from 'src/app/shared/service/utils.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  
  userForm!: FormGroup;
  mode = 'create';
  private id: number = 0;

  constructor(private userService: UserService,private utilsService: UtilsService, public route: ActivatedRoute) { }

  ngOnInit(): void {
  
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      mobile: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.maxLength(10)]),
      location: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')])
    });

    this.route.params.subscribe(params => {
      if(params['id']) {
        this.mode = "edit";
        this.id = params['id'];
        this.userService.getUserById(this.id).subscribe(userData => {
          this.userForm.setValue({
            'firstName':userData['firstName'],
            'lastName':userData['lastName'],
            'email':userData['email'],
            'mobile':userData['mobile'],
            'location':userData['location']
          });
        });
      } else {
        this.mode = "create";
      }
    });
  }

  addUpdateUser(){
    if (this.userForm.invalid) {
      return;
    }
    console.log(this.userForm.value)
    let user = this.userForm.value
    if(this.mode == 'create') {
      this.userService.addUser(this.userForm.value).subscribe( (message) =>{
        console.log(message);
        this.utilsService.navigateByUrl('/');
      });
    } else {
      this.userService.updateUser(this.id,this.userForm.value).subscribe( (message) =>{
        console.log(message);
        this.utilsService.navigateByUrl('/');
      });
    }
  }
}
