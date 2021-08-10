import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {ItemService} from '../../../services/item.service';
import {Subcategory} from '../../../shared/subcategory';
import {SubcategoryService} from '../../../services/subcategory.service';
import {Location} from '@angular/common';

@Component({
  selector: 'code-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.scss']
})
export class ItemAddComponent implements OnInit {

  item = {
    name: '',
    code: '',
    state: '',
    subCategoryId: null,
    description: '',
    price: 0,
    label: ''
  };
  subcategorys: Subcategory[];

  constructor(public dialogRef: MatDialogRef<ItemAddComponent>, public itemService: ItemService,
              public subcategoryService: SubcategoryService, private location: Location) {
  }

  ngOnInit() {
    // cargado de subgateries
    this.subcategoryService.getSubcategories().subscribe(res => {
      this.subcategorys = res;
    });
  }

  // guardar el item
  onSubmit() {
    console.log('Item: ', this.item);
    this.itemService.postItem(this.item).subscribe(res => {
      return res;
    });
    this.dialogRef.close();
  }

}
