import {Component, OnInit} from '@angular/core';
import {Category} from '../../../shared/category';
import {CategoryService} from '../../../services/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'code-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.scss']
})
export class CategoryUpdateComponent implements OnInit {

  category: Category;
  categoryId: number;
  categorie = {
    nameCategory: '',
    code: ''
  };

  constructor(private categoryService: CategoryService, private activateRoute: ActivatedRoute, private location: Location, private router: Router) {
  }

  ngOnInit() {
    this.activateRoute.params
      .subscribe(
        (paramss) => {
          this.categoryId = paramss.id;
          this.categoryService.getCategory(this.categoryId)
            .subscribe(category => this.categorie = category);
          console.log('category:', this.categorie);
        }
      );
  }

  edit() {
    this.categoryService.putCategory(this.categorie).subscribe(
      (response) => {
        this.location.back();
      }, (error) => {
        console.log('error: ', error);
      }
    );
  }
}
