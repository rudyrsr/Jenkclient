import {Component, Inject, OnInit} from '@angular/core';
import {Item} from '../../shared/item';
import {ItemService} from '../../services/item.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {ItemAddComponent} from './item-add/item-add.component';
import {ItemUpdateComponent} from './item-update/item-update.component';

@Component({
  selector: 'code-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  dataSource: Item[];
  displayedColumns = ['id', 'name', 'label', 'description', 'price', 'code', 'state', 'subCategoryId', 'updated', 'deleted', 'image'];

  constructor(private serviceItem: ItemService, @Inject('BaseURL') public BaseURL, public dialog: MatDialog,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.getItems();
  }

  deleteItem(id: number): void {
    this.serviceItem.deleteItemId(id).subscribe(res => {
      this.getItems();
    });
  }

  openItemForm(): void {
    this.dialog.open(ItemAddComponent, {width: '950px', height: '450px'});
    this.dialog.afterAllClosed.subscribe(res => {
      this.getItems();
      window.location.reload();
    });
  }

  updateItemForm(): void {
    this.dialog.open(ItemUpdateComponent, {width: '950px', height: '450px'});
  }

  getItems(): void {
    this.serviceItem.getItems().subscribe(items => this.dataSource = items);
  }
}
