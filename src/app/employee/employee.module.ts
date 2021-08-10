import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { MaterialModule } from '../shared/material/material.module';
import { EmployeeService } from './shared/employee.service';
import { SharedModule } from '../shared/shared.module';
import { SuccessNotificationComponent } from '../shared/success-notification/success-notification.component';
import { EmployeeFormComponent } from './shared/employee-form/employee-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    EmployeeRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [EmployeeListComponent, EmployeeAddComponent, EmployeeViewComponent, EmployeeComponent, EmployeeFormComponent],
  providers: [EmployeeService, DatePipe],
  entryComponents: [SuccessNotificationComponent, EmployeeViewComponent, EmployeeAddComponent]
})
export class EmployeeModule { }
