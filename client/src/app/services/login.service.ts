import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Login } from "../models/login";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  uri: string = `http://localhost:4000/api/user`;
  constructor(private http: HttpClient) {}

  login(data) {
    return this.http.post<any>(`${this.uri}/login`, data);
  }

  loggedIn() {
    return !!localStorage.getItem("auth-token");
  }
}
