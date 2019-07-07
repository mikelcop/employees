import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import {
  MatDialog,
  MatSnackBar,
  MatTableDataSource,
  MatPaginator
} from "@angular/material";
import { MatSort } from "@angular/material/sort";
import { EmployeesService } from "../../services/employees.service";
import { DeleteDialogComponent } from "../dialogs/delete-dialog/delete-dialog.component";

@Component({
  selector: "app-employees",
  templateUrl: "./employees.component.html",
  styleUrls: ["./employees.component.css"]
})
export class EmployeesComponent implements OnInit {
  employees: any;
  loading: boolean = true;

  // Paginator Values
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // Table Available Columns
  displayedColumns: string[] = [
    "user_id",
    "employee_name",
    "date_created",
    "time_in",
    "time_out",
    "active",
    "actions"
  ];

  constructor(
    private employeesService: EmployeesService,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.fetchEmployees();
  }

  openSnackBar(message) {
    this.snackBar.open(message, "Ok", {
      duration: 3000
    });
  }

  openDialog(elements) {
    const dialogResponse = this.dialog.open(DeleteDialogComponent, {
      data: {
        employee_name: elements.employee_name,
        user_id: elements.user_id,
        id: elements._id
      }
    });
    dialogResponse.afterClosed().subscribe(response => {
      if (response == "true") {
        this.deleteEmployee(elements._id);
      }
    });
  }

  fetchEmployees() {
    this.employeesService.getEmployees().subscribe(data => {
      this.employees = new MatTableDataSource(data);
      this.employees.sort = this.sort;
      this.employees.paginator = this.paginator;
      this.loading = false;
      this.router.navigate(["/employees"]);
    });
  }

  editEmployee(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteEmployee(id) {
    this.loading = true;
    this.employeesService.deleteEmployee(id).subscribe(() => {
      this.openSnackBar("Recored Successfully Deleted.");
      this.fetchEmployees();
    });
  }

  applyFilter(filterText: String) {
    this.employees.filter = filterText.trim().toLowerCase();
  }
}
