import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from '../interfaces/iuser';


@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrl: './users-dashboard.component.css'
})
export class UsersDashboardComponent {

  users: IUser[] = []

  selectedUser: IUser = {
    id: 0,
    name: "",
    username: "",
    email: "",
    phone: "",
    website: ""
  }

  

  constructor(private _service: UserService){ 

      this._service.getAll().subscribe(
        response => {
          this.users = response
        }
      )

  }

  ngOnInit(): void {
    this._service.getAll().subscribe(
      response => this.users = response
    )
}

displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website']

addUser(user: IUser): void{
  this.users.push({...user});
  console.log(this.users);
}

}
