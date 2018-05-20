import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import "rxjs/Rx";
import { Observable } from "rxjs";

import { User } from "../user.model";

@Injectable()
export class AuthenticationService {
  constructor(private http: Http) {}

  signup(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({ "Content-Type": "application/json" });
    return this.http
      .post("http://localhost:3000/user", body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  signin(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({ "Content-Type": "application/json" });
    return this.http
      .post("http://localhost:3000/user/signin", body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  demosignin() {
    const user = { email: "cool@cool.com", passwordDigest: "password" };
    const body = JSON.stringify(user);
    const headers = new Headers({ "Content-Type": "application/json" });
    return this.http
      .post("https://camp-fire.herokuapp.com/user/signin", body, {
        headers: headers
      })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn() {
    return localStorage.getItem("token") !== null;
  }
}
