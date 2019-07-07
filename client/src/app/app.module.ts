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
  MatSlideToggleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
  MatSortModule,
  MatPaginatorModule
} from "@angular/material";

import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EmployeesComponent } from "./components/employees/employees.component";
import { LoginComponent } from "./components/login/login.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CreateComponent } from "./components/create/create.component";
import { EditComponent } from "./components/edit/edit.component";
import { DeleteDialogComponent } from "./components/dialogs/delete-dialog/delete-dialog.component";
import { LoginService } from "./services/login.service";
import { EmployeesService } from "./services/employees.service";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "create", component: CreateComponent, canActivate: [AuthGuard] },
  { path: "edit/:id", component: EditComponent, canActivate: [AuthGuard] },
  {
    path: "employees",
    component: EmployeesComponent,
    canActivate: [AuthGuard]
  },
  { path: "", redirectTo: "employees", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    LoginComponent,
    CreateComponent,
    EditComponent,
    DeleteDialogComponent
  ],
  entryComponents: [DeleteDialogComponent],
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
    MatSlideToggleModule,
    NgxMaterialTimepickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [LoginService, EmployeesService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
