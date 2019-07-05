import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { MatSnackBar } from "@angular/material";

import { EmployeesService } from "../../services/employees.service";
import { Employee } from "../../models/employees";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  id: String;
  employee: any = {};
  updateForm: FormGroup;
  color = "primary";
  checked = false;
  disabled = false;

  // tslint:disable-next-line:max-line-length
  constructor(
    private employeeService: EmployeesService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.updateForm = this.fb.group({
      user_id: ["", Validators.required],
      employee_name: "",
      time_in: "",
      time_out: "",
      active: ""
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.employeeService.getEmployeeById(this.id).subscribe(res => {
        this.employee = res;
        this.updateForm.get("user_id").setValue(this.employee.user_id);
        this.updateForm
          .get("employee_name")
          .setValue(this.employee.employee_name);
        this.updateForm.get("time_in").setValue(this.employee.time_in);
        this.updateForm.get("time_out").setValue(this.employee.time_out);
        this.updateForm.get("active").setValue(this.employee.active);
      });
    });
  }

  updateEmployee(data) {
    this.employeeService.updateEmployee(this.id, data).subscribe(() => {
      this.snackBar.open("Employee updated successfully", "OK", {
        duration: 3000
      });
    });
  }
}
