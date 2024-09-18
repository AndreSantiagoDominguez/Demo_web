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

  constructor(private _service: UserService){ 

      this._service.getAll().subscribe(
        response => {
          this.users = response
        }
      )

  }

}
