import { Component,OnInit } from '@angular/core';
import {UserModel} from '../../Models/user.model'

@Component({
    templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

    user:UserModel;
  constructor() { 
      this.user = new UserModel();
  }

  ngOnInit(): void {
  }

}