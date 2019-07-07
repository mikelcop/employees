import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "./services/login.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Starshot Time Tracking App";
  logedIn = false;
  constructor(private router: Router, private loginService: LoginService) {}

  logout() {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }

  home() {
    this.router.navigate(["/"]);
  }

  ngOnInit() {
    this.logedIn = this.loginService.loggedIn();
  }
}
