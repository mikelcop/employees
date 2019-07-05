import { Injectable } from "@angular/core";
import { Employee } from "../models/employees";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class EmployeesService {
  employees: Employee[];
  uri: string = `http://localhost:4000/api`;

  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get(`${this.uri}/employees`);
  }

  getEmployeeById(id) {
    return this.http.get(`${this.uri}/employees/${id}`);
  }

  addEmployee(data) {
    //console.log(data);
    const employee = {
      user_id: data.user_id.value,
      employee_name: data.employee_name.value,
      time_in: data.time_in.value,
      time_out: data.time_out.value,
      active: data.active.value
    };
    console.log(data);
    return this.http.post(`${this.uri}/employees/add`, employee);
  }

  updateEmployee(id, data) {
    const employee = {
      user_id: data.user_id.value,
      employee_name: data.employee_name.value,
      time_in: data.time_in.value,
      time_out: data.time_out.value,
      active: data.active.value
    };
    return this.http.post(`${this.uri}/employees/update/${id}`, employee);
  }

  deleteEmployee(id) {
    return this.http.get(`${this.uri}/employees/delete/${id}`);
  }
}
