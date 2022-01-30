import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/shared/service/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UtilsService } from 'src/app/shared/service/utils.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit , AfterViewInit{

  users: User[]; 

  displayedColumns = ['id', 'firstName', 'lastName', 'email' ,'mobile', 'location','action'];

  dataSource =  new MatTableDataSource<User>();

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private userService: UserService,private utilsService: UtilsService) { 
    this.users =[];
  }

  ngOnInit() {
    this.getUsers();
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(event : Event){
    this.dataSource.filter = (event.target as HTMLInputElement).value;
  }
  getUsers() {
    this.userService.getUsers().subscribe( (users) =>{
      console.log(users);
      this.users = users;
      this.dataSource.data = this.users;
    });
  }
  onDelete(id:number){
    this.userService.deleteUser(id).subscribe( (message) =>{
      console.log(message);
      this.getUsers();
      this.utilsService.navigateByUrl('/');
    });
  }
  

}
