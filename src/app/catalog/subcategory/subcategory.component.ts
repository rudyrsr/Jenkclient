import {Component, Inject, OnInit} from '@angular/core';
import {Subcategory} from '../../shared/subcategory';
import {SubcategoryService} from '../../services/subcategory.service';
import {MatDialog} from '@angular/material';
import {SubcategoryAddComponent} from './subcategory-add/subcategory-add.component';

@Component({
  selector: 'code-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent implements OnInit {
  dataSource: Subcategory[];
  displayedColumns = ['idSub', 'nameSub', 'codeSub', 'categoryId', 'update', 'delete'];

  constructor(private subcategoryService: SubcategoryService, @Inject('BaseURL') public BaseURL, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getSubcategories();
  }

  deleteSubcategory(id: number): void {
    this.subcategoryService.deleteSubcategory(id).subscribe(res => {
      this.getSubcategories();
    });
  }

  openSubcategoryForm(): void {
    this.dialog.open(SubcategoryAddComponent, {width: '750px', height: '400px'});
    this.dialog.afterAllClosed.subscribe(res => {
      this.getSubcategories();
      window.location.reload();
    });
  }

  getSubcategories(): void {
    this.subcategoryService.getSubcategories().subscribe(subcategories => {
      this.dataSource = subcategories;
    });
  }
}
