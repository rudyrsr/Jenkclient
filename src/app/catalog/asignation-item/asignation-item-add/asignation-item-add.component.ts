import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {AsignationItemService} from '../../../services/asignation-item.service';
import {Item} from '../../../shared/item';
import {Employee} from '../../../shared/employee';
import {ItemService} from '../../../services/item.service';
import {EmployeeService} from '../../../employee/shared/employee.service';

@Component({
  selector: 'code-asignation-item-add',
  templateUrl: './asignation-item-add.component.html',
  styleUrls: ['./asignation-item-add.component.scss']
})
export class AsignationItemAddComponent implements OnInit {

  itemasignation = {
    initDateIA: null,
    endDateIA: null,
    itemId: null,
    employeeId: null,
    description: '',
    stateActual: ''
  };
  items: Item[];
  employeess: Employee[];
  maxDate = new Date();
  maximo = this.maxDate.toISOString();
  parte = this.maximo.substring(0, 10);

  constructor(public dialogRef: MatDialogRef<AsignationItemAddComponent>, public itemasigService: AsignationItemService, public itemService: ItemService, public employeeService: EmployeeService) {
  }

  ngOnInit() {
    // cargar items
    this.itemService.getItems().subscribe(res => {
      this.items = res;
    });
    // cargar employees
    this.employeeService.getAll().subscribe(res => {
      this.employeess = res;
    });
    console.log('hola noe ' + this.maximo);
    console.log('hola noe ' + this.parte);
  }

  // guardar la asignation de item
  onSubmit() {
    console.log('ItemAsignation: ', this.itemasignation);
    this.itemasigService.postAsignationItem(this.itemasignation).subscribe(res => {
      return res;
    });
    this.dialogRef.close();
  }
}
