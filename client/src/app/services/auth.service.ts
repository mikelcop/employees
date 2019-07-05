import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  uri: string = `http://localhost:4000/api/user`;
  constructor(private http: HttpClient) {}

  login(data) {
    console.log("LOGIN", data);
    return this.http.post(`${this.uri}/login`, data);
  }
}
