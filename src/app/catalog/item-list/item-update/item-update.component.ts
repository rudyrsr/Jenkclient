import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Item} from '../../../shared/item';
import {ItemService} from '../../../services/item.service';
import {Subcategory} from '../../../shared/subcategory';
import {SubcategoryService} from '../../../services/subcategory.service';

@Component({
  selector: 'code-item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.scss']
})
export class ItemUpdateComponent implements OnInit {
  item: Item;
  itemId: number;
  items = {
    label: '',
    name: '',
    description: '',
    code: '',
    price: '',
    state: '',
    subCategoryId: 0
  };
  subcategorys: Subcategory[];

  constructor(
    private itemService: ItemService,
    private activateroute: ActivatedRoute,
    private location: Location,
    private router: Router, public subcategoryService: SubcategoryService
  ) {
  }

  ngOnInit() {
    this.activateroute.params
      .subscribe(
        (paramss) => {
          this.itemId = paramss.id;
          this.itemService.getItem(this.itemId)
            .subscribe(item => this.items = item);
          console.log('items:', this.items);
        }
      );

    //cargando las subcategorias
    this.subcategoryService.getSubcategories().subscribe(res => {
      this.subcategorys = res;
    });
  }

  edit() {
    this.itemService.putItem(this.items).subscribe(
      (response) => {
        this.location.back();
      }, (error) => {
        console.log('error: ', error);
      }
    );
  }
}
