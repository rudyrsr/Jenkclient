import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Employee } from '../../../shared/employee';
import { FormMode } from '../../../shared/enums/form-mode';
import { MatSlideToggleChange, MatDatepickerInputEvent } from '@angular/material';
import { EmployeePosition } from '../../../shared/employee-position';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'code-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit, OnChanges {

  @Input()
  title: string;
  @Input()
  employee: Employee;
  @Input()
  mode: FormMode;
  @Output()
  save = new EventEmitter<Employee>();

  formMode = FormMode;
  readOnlyMode: boolean;
  minDate = new Date(1900, 0, 1);
  maxDate = new Date();
  birthDateObject: Date;
  selectedPosition: EmployeePosition;
  positions: EmployeePosition[] = [
    {
      id: 1,
      positionName: 'arquitecto'
    },
    {
      id: 2,
      positionName: 'ingeniero civil'
    }
  ];

  constructor(private datePipe: DatePipe) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.employee) {
      this.birthDateObject = new Date(this.employee.birthDate);
    }
  }

  ngOnInit() {
    this.readOnlyMode = this.mode === FormMode.VIEW;
  }

  saveAction(employee: Employee) {
    this.save.emit(employee);
  }

  onActivateEdit(event: MatSlideToggleChange) {
    this.readOnlyMode = !event.checked;
  }

  changeDate(type: string, event: MatDatepickerInputEvent<Date>) {
    // 2018-04-10T18:46:19.000+0000
    this.employee.birthDate = this.datePipe.transform(event.value, 'yyyy-MM-ddT00:00:00.000+0000');
    console.log('employee', this.employee);
  }
}
