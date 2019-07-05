import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import {
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatTableModule,
  MatDividerModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatSlideToggleModule
} from "@angular/material";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EmployeesComponent } from "./components/employees/employees.component";
import { LoginComponent } from "./components/login/login.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CreateComponent } from "./components/create/create.component";
import { EditComponent } from "./components/edit/edit.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "create", component: CreateComponent },
  { path: "edit/:id", component: EditComponent },
  { path: "employees", component: EmployeesComponent },
  { path: "", redirectTo: "employees", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    LoginComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
