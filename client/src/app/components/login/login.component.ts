import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material";
import { LoginService } from "../../services/login.service";
import { Login } from "../../models/login";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  success = false;

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      username: ["admin", Validators.required],
      password: ["password", Validators.required]
    });
  }

  openSnackBar(message) {
    this.snackBar.open(message, "OK", {
      duration: 3000
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      this.openSnackBar("Invalid Credentials");
      return;
    }

    this.success = true;
    const pdata = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    };
    this.loginService.login(pdata).subscribe(data => {
      if (data.token) {
        localStorage.setItem("auth-token", data.token);
        this.router.navigate(["/"]);
      } else {
        this.openSnackBar("Invalid Credentials");
      }
    });
  }

  ngOnInit() {
    //this.loginForm.reset();
  }
}
