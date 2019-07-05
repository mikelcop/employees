import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { EmployeesService } from "../../services/employees.service";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"]
})
export class CreateComponent implements OnInit {
  addEmployeeForm: FormGroup;
  color = "primary";
  checked = false;
  disabled = false;

  constructor(
    private employeeService: EmployeesService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.addEmployeeForm = this.fb.group({
      user_id: ["", Validators.required],
      employee_name: "",
      time_in: "",
      time_out: "",
      active: ""
    });
  }
  addEmployee(data) {
    this.employeeService.addEmployee(data).subscribe(() => {
      this.router.navigate(["/employees"]);
    });
  }
  ngOnInit() {}
}
