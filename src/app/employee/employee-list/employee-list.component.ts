import { Component, OnInit, ViewChild } from "@angular/core";
import {
  MatTableDataSource,
  MatPaginator,
  MatSort,
  MatSnackBar,
  MatDialogRef,
  MatDialog
} from "@angular/material";
import { Employee } from "../../shared/employee";
import { EmployeeService } from "../shared/employee.service";
import { EmployeeComponent } from "../employee.component";
import { SuccessNotificationComponent } from "../../shared/success-notification/success-notification.component";
import { FormMode } from "../../shared/enums/form-mode";
import { EmployeeViewComponent } from "../employee-view/employee-view.component";
import { EmployeeForm } from "../shared/employee-form/employee-form";
import { EmployeeAddComponent } from "../employee-add/employee-add.component";

@Component({
  selector: "code-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.scss"]
})
export class EmployeeListComponent implements OnInit {
  displayedColumns = ["firstName", "lastName", "jobPosition", "action"];
  dataSource: MatTableDataSource<Employee>;
  dialogRef: MatDialogRef<EmployeeForm>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private service: EmployeeService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadEmployees();
  }

  public delete(employee: Employee): void {
    this.service.delete(employee.id).subscribe(data => {
      this.success();
      this.loadEmployees();
    });
  }

  public view(employee: Employee): void {
    this.openEmployeeDetailPopup({
      data: {
        formMode: FormMode.VIEW,
        employeeId: employee.id
      }
    });
  }

  public edit(employee: Employee): void {
    this.openEmployeeDetailPopup({
      data: {
        formMode: FormMode.EDIT,
        employeeId: employee.id
      }
    });
  }

  public add(): void {
    this.openEmployeeAddPopup({
      data: {
        formMode: FormMode.ADD
      }
    });
  }

  public getIdButton(type: string, position: any): string {
    return type + ((position && position.id)? position.id: '');
  }

  private loadEmployees(): void {
    this.service.getAll().subscribe(data => {
      this.dataSource = new MatTableDataSource<Employee>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  private openEmployeeDetailPopup(params): void {
    this.dialogRef = this.dialog.open(EmployeeViewComponent, params);
    this.dialogRef.afterClosed().subscribe((result: Employee) => {
      if (result) {
        this.success();
        this.loadEmployees();
      }
    });
  }

  private openEmployeeAddPopup(params): void {
    this.dialogRef = this.dialog.open(EmployeeAddComponent, params);
    this.dialogRef.afterClosed().subscribe((result: Employee) => {
      if(result) {
        this.success();
        this.loadEmployees();
      }
    });
  }

  private success(): void {
    this.snackBar.openFromComponent(SuccessNotificationComponent, {
      duration: 1000
    });
  }
}
