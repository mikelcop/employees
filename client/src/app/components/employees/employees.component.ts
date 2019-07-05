import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatTableDataSource } from "@angular/material";

import { Employee } from "../../models/employees";
import { EmployeesService } from "../../services/employees.service";

@Component({
  selector: "app-employees",
  templateUrl: "./employees.component.html",
  styleUrls: ["./employees.component.css"]
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];
  displayedColumns = [
    "user_id",
    "employee_name",
    "time_in",
    "time_out",
    "active",
    "actions"
  ];

  constructor(
    private employeesService: EmployeesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.fetchEmployees();
  }

  fetchEmployees() {
    this.employeesService.getEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
      console.log("Data requested ...");
      console.log(this.employees);
    });
  }

  editEmployee(id) {
    console.log("ID", id);
    this.router.navigate([`/edit/${id}`]);
  }

  deleteEmployee(id) {
    this.employeesService.deleteEmployee(id).subscribe(() => {
      this.fetchEmployees();
    });
  }
}
