import {Component, OnInit} from '@angular/core';
import {Subcategory} from '../../../shared/subcategory';
import {SubcategoryService} from '../../../services/subcategory.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Category} from '../../../shared/category';
import {CategoryService} from '../../../services/category.service';

@Component({
  selector: 'code-subcategory-update',
  templateUrl: './subcategory-update.component.html',
  styleUrls: ['./subcategory-update.component.scss']
})
export class SubcategoryUpdateComponent implements OnInit {

  subcategory: Subcategory;
  subcategoryId: number;
  subcategorys = {
    nameSub: '',
    codeSub: '',
    categoryId: 0
  };
  categorys: Category[];

  constructor(private subcategoryService: SubcategoryService, private activateRoute: ActivatedRoute,
              private location: Location, private router: Router, public categoryService: CategoryService) {
  }

  ngOnInit() {
    this.activateRoute.params
      .subscribe(
        (paramss) => {
          this.subcategoryId = paramss.id;
          this.subcategoryService.getSubcategory(this.subcategoryId)
            .subscribe(subcategory => this.subcategorys = subcategory);
          console.log('subcategory:', this.subcategorys);
        }
      );

    // cargando las categorias
    this.categoryService.getCategories().subscribe(res => {
      this.categorys = res;
    });
  }

  edit() {
    this.subcategoryService.putSubcategory(this.subcategorys).subscribe(
      (response) => {
        this.location.back();
      }, (error) => {
        console.log('error: ', error);
      }
    );
  }
}
