import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {SubcategoryService} from '../../../services/subcategory.service';
import {Category} from '../../../shared/category';
import {CategoryService} from '../../../services/category.service';

@Component({
  selector: 'code-subcategory-add',
  templateUrl: './subcategory-add.component.html',
  styleUrls: ['./subcategory-add.component.scss']
})
export class SubcategoryAddComponent implements OnInit {

  subcategory = {
    nameSub: '',
    codeSub: '',
    categoryId: null
  };
  categorys: Category[];

  constructor(public dialogRef: MatDialogRef<SubcategoryAddComponent>, public subcategoryService: SubcategoryService, public categoryService: CategoryService) {
  }

  ngOnInit() {
    // cargado de categories
    this.categoryService.getCategories().subscribe(res => {
      this.categorys = res;
    });
  }

  // guardar la subcategory
  onSubmit() {
    console.log('Subcategory:', this.subcategory);
    this.subcategoryService.postSubcategory(this.subcategory).subscribe(res => {
      res;
    });
    this.dialogRef.close();
  }

}
