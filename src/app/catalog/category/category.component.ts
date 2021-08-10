import {Component, Inject, OnInit} from '@angular/core';
import {Category} from '../../shared/category';
import {CategoryService} from '../../services/category.service';
import {MatDialog} from '@angular/material';
import {CategoryAddComponent} from './category-add/category-add.component';

@Component({
  selector: 'code-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  dataSource: Category[];
  displayedColumns = ['idCateg', 'nameCategory', 'code', 'update', 'delete'];

  constructor(private categoryService: CategoryService, @Inject('BaseURL') public BaseURL, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getCategories();
  }

  deleteCategory(id: number): void {
    this.categoryService.deleteCategory(id).subscribe(res => {
      this.getCategories();
    });
  }

  openCategoryForm(): void {
    this.dialog.open(CategoryAddComponent, {width: '750px', height: '400px'});
    this.dialog.afterAllClosed.subscribe(res => {
      this.getCategories();
      window.location.reload();
    });
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(categories => {
      this.dataSource = categories;
    });
  }
}
