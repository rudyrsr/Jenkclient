import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../login.component";
import { Subject } from "rxjs";

const users: User[] = [
  {
    username: "admin",
    password: "admin"
  }
];

@Injectable({
  providedIn: "root"
})
export class LoginService {
  private subject: Subject<boolean> = new Subject();

  constructor(private router: Router) {}

  public logout(): void {
    localStorage.removeItem("user");
    this.subject.next(false);
    this.router.navigate(["/login"]);
  }

  public login(user: User): boolean {
    const authenticatedUser = users.find(u => u.username === user.username);
    if (authenticatedUser && authenticatedUser.password === user.password) {
      localStorage.setItem("user", authenticatedUser.username);
      this.subject.next(true);
      this.router.navigate(["/home"]);
      return true;
    }

    return false;
  }

  public isSessionActive(): boolean {
    const inactive = localStorage.getItem("user") === null;
    if (inactive) {
      this.router.navigate(["/login"]);
    }

    return !inactive;
  }

  public session(): Subject<boolean> {
    return this.subject;
  }
}
