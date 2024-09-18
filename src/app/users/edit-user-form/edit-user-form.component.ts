import { Component, EventEmitter, input, Output, } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from '../interfaces/iuser';

@Component({
  selector: 'app-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrl: './edit-user-form.component.css'
})
export class EditUserFormComponent {

  user: IUser = {
    
    id: 0,
    name: "",
    username: "",
    email: "",
    phone:"",
    website: "",

  }



  constructor(private _service: UserService){
    this._service.get().subscribe(
      response => this.user = response
    )
  }

  
  

  mostrar(): void{
    console.log(this.user.name)
    console.log(this.user)
  }
}
