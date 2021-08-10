import {Component, Inject, OnInit} from '@angular/core';
import {AsignationItem} from '../../shared/asignationItem';
import {AsignationItemService} from '../../services/asignation-item.service';
import {MatDialog} from '@angular/material';
import {AsignationItemAddComponent} from './asignation-item-add/asignation-item-add.component';

@Component({
  selector: 'code-asignation-item',
  templateUrl: './asignation-item.component.html',
  styleUrls: ['./asignation-item.component.scss']
})
export class AsignationItemComponent implements OnInit {
  dataSource: AsignationItem[];
  displayedColumns = ['id', 'initDateIA', 'endDateIA', 'description', 'itemId', 'employeeId', 'stateActual', 'put', 'delete'];

  constructor(private itemAsignation: AsignationItemService, @Inject('BaseURL') public BaseURL, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getItemsAsig();
  }

  deleteItemAsignation(id: number): void {
    this.itemAsignation.deleteAsignationItem(id).subscribe(res => {
      this.getItemsAsig();
    });
  }

  openItemAsignationForm(): void {
    this.dialog.open(AsignationItemAddComponent, {width: '1150px', height: '500px'});
    this.dialog.afterAllClosed.subscribe(res => {
      this.getItemsAsig();
      window.location.reload();
    });
  }

  getItemsAsig(): void {
    this.itemAsignation.getAsignationItems().subscribe(itemAsignations => {
      this.dataSource = itemAsignations;
    });
  }

}
