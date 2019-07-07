import { Injectable } from "@angular/core";
import { Employee } from "../models/employees";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { delay } from "rxjs/operators";

const httOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    "auth-token": localStorage.getItem("auth-token")
  })
};

@Injectable({
  providedIn: "root"
})
export class EmployeesService {
  uri: string = `http://localhost:4000/api`;

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(`${this.uri}/employees`, httOptions);
  }

  getEmployeeById(id) {
    return this.http.get(`${this.uri}/employees/${id}`);
  }

  getEmployeeByUserId(user_id) {
    return this.http.get(`${this.uri}/employees/user/${user_id}`);
  }

  addEmployee(data) {
    return this.http.post<Employee>(`${this.uri}/employees/add`, data);
  }

  updateEmployee(id, data) {
    return this.http.post(`${this.uri}/employees/update/${id}`, data);
  }

  deleteEmployee(id) {
    return this.http.get(`${this.uri}/employees/delete/${id}`);
  }
}
