import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user_email;
  user_password;

  message;

  user_input;


  takeInfo(evt: MouseEvent) {
    this.message = "Acces granted!";
    this.user_input = [this.user_email, this.user_password];
  }

  constructor() { }

  ngOnInit(): void {
  }

}
