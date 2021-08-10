import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {CategoryService} from '../../../services/category.service';

@Component({
  selector: 'code-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {

  category = {
    nameCategory: '',
    code: ''
  };

  constructor(public dialogRef: MatDialogRef<CategoryAddComponent>, public categoryService: CategoryService) {
  }

  ngOnInit() {
  }

  // guardar el category
  onSubmit() {
    console.log('Category: ', this.category);
    this.categoryService.postCategory(this.category).subscribe(res => {
      return res;
    });
    this.dialogRef.close();
  }
}
