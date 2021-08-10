import { Component, OnInit, Inject } from '@angular/core';
import { EmployeeForm } from '../shared/employee-form/employee-form';
import { Employee } from '../../shared/employee';
import { FormMode } from '../../shared/enums/form-mode';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EmployeeService } from "../shared/employee.service";

@Component({
  selector: 'code-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit, EmployeeForm {
  employee: Employee = {};
  formMode: FormMode;

  constructor(
    private dialogRef: MatDialogRef<EmployeeAddComponent>,
    @Inject(MAT_DIALOG_DATA) private params: any,
    private employeeService: EmployeeService
  ) {
    this.formMode = params.formMode;
  }

  ngOnInit() {
  }

  public save(employee: Employee) {
    this.employeeService.add(employee)
      .subscribe((response: Employee) => this.dialogRef.close(response));
  }
}
