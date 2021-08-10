import { Component, OnInit } from '@angular/core';
import { LoginService } from './shared/login.service';

export interface User {
  username?:string;
  password?:string;
}
@Component({
  selector: 'code-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = {};
  errorMessage: string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  public login(user: User): void {
    const success = this.loginService.login(user);
    if(!success){
      this.errorMessage = 'Password invalid or user does not exist.';
      return;
    }
  }
}
