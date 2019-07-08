import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";
import { EmployeesService } from "../../services/employees.service";
import * as moment from "moment-timezone";

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
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.addEmployeeForm = this.fb.group({
      user_id: ["", Validators.required],
      employee_name: ["", Validators.required],
      time_in: "",
      time_out: "",
      active: false
    });
  }

  saveEmployee(data) {
    const employee = {
      user_id: data.user_id.value,
      employee_name: data.employee_name.value,
      time_in: data.time_in.value,
      time_out: data.time_out.value,
      date_created: moment().format("lll"),
      active: data.active.value
    };

    this.employeeService.addEmployee(employee).subscribe(() => {
      this.openSnackBar("Employee Added successfully");
      this.addEmployeeForm.reset();
      //this.router.navigate(["/employees"]);
    });
  }

  openSnackBar(message) {
    this.snackBar.open(message, "OK", {
      duration: 3000
    });
  }

  addEmployee(data) {
    const user_id = data.user_id.value;
    let found = true;
    this.employeeService.getEmployeeByUserId(user_id).subscribe((res: any) => {
      if (res.length > 0) {
        this.openSnackBar("User ID already Exist");
      } else {
        if (this.validateTimeIn(data)) {
          this.saveEmployee(data);
        }
      }
    });
  }

  validateTimeIn(input): boolean {
    const user_id: number = input.user_id.value;
    const timein: string = input.time_in.value;
    const timeout: string = input.time_out.value;
    let found: boolean;
    let invalidTime: boolean;
    const curDate: Date = moment().format("ll");
    const time_in: any = moment(`${curDate} ${timein}`);
    const time_out: Date = moment(`${curDate} ${timeout}`);
    const timeDiff: number = time_in.diff(time_out, "minutes");

    if (timeDiff >= 0) {
      invalidTime = true;
      this.openSnackBar("Time-out should not be equal or less than Time-in.");
    } else {
      invalidTime = false;
    }
    return !invalidTime;
  }

  ngOnInit() {}
}
