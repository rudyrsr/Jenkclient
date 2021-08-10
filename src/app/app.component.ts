import { Component, OnInit } from '@angular/core';
import { LoginService } from './login/shared/login.service';

@Component({
  selector: 'code-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  activeSession: boolean;

  constructor(private loginService: LoginService) {

  }

  public ngOnInit(): void {
    this.activeSession = this.loginService.isSessionActive();
    this.loginService.session()
    .subscribe((active: boolean) => {
      this.activeSession = active;
    });
  }
}
