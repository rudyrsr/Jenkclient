import { Component, OnInit, Inject } from "@angular/core";
import { EmployeeForm } from "../shared/employee-form/employee-form";
import { Employee } from "../../shared/employee";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { EmployeeService } from "../shared/employee.service";
import { FormMode } from "../../shared/enums/form-mode";

@Component({
  selector: "code-employee-view",
  templateUrl: "./employee-view.component.html",
  styleUrls: ["./employee-view.component.scss"]
})
export class EmployeeViewComponent implements OnInit, EmployeeForm {
  employee: Employee = {};
  employeeId: string | number;
  formMode: FormMode;

  constructor(
    private dialogRef: MatDialogRef<EmployeeViewComponent>,
    @Inject(MAT_DIALOG_DATA) private params: any,
    private employeeService: EmployeeService
  ) {
    this.employeeId = params.employeeId;
    this.formMode = params.formMode;
  }

  ngOnInit() {
    this.employeeService
      .get(this.employeeId)
      .subscribe((employee: Employee) => {
        this.employee = employee;
      });
  }

  public save(employee: Employee): void {
    this.employeeService
      .update(employee)
      .subscribe((response: Employee) => this.dialogRef.close(response));
  }
}
