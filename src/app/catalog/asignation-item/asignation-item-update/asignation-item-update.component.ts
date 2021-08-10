import {Component, OnInit} from '@angular/core';
import {AsignationItem} from '../../../shared/asignationItem';
import {AsignationItemService} from '../../../services/asignation-item.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Item} from '../../../shared/item';
import {Employee} from '../../../shared/employee';
import {ItemService} from '../../../services/item.service';
import {EmployeeService} from '../../../services/employee.service';

@Component({
  selector: 'code-asignation-item-update',
  templateUrl: './asignation-item-update.component.html',
  styleUrls: ['./asignation-item-update.component.scss']
})
export class AsignationItemUpdateComponent implements OnInit {
  itemAsignation: AsignationItem;
  itemasigId: number;
  itemsasig = {
    description: '',
    stateActual: '',
    itemId: 0,
    employeeId: 0,
    initDateIA: '',
    endDateIA: ''
  };
  items: Item[];
  employeeess: Employee[];

  constructor(private itemasigService: AsignationItemService, private activateRoute: ActivatedRoute,
              private location: Location, private route: Router, public itemService: ItemService, public employeService: EmployeeService) {
  }

  ngOnInit() {
    this.activateRoute.params
      .subscribe(
        (paramss) => {
          this.itemasigId = paramss.id;
          this.itemasigService.getAsignationItem(this.itemasigId)
            .subscribe(itemasign => this.itemsasig = itemasign);
          console.log('items:', this.itemsasig);
        }
      );

    // cargando items
    this.itemService.getItems().subscribe(res => {
      this.items = res;
    });
    //cargando employees
    this.employeService.getEmployees().subscribe(res => {
      this.employeeess = res;
    });
  }

  edit() {
    this.itemasigService.putAsignationItem(this.itemsasig).subscribe(
      (response) => {
        this.location.back();
      }, (error) => {
        console.log('error: ', error);
      }
    );
  }
}
