import { Component, OnInit } from '@angular/core';
import { CatalogUCService } from '../services/catalog-uc.service';
import { Location } from '@angular/common';
@Component({
  selector: 'code-catalog-uc-new',
  templateUrl: './catalog-uc-new.component.html',
  styleUrls: ['./catalog-uc-new.component.scss']
})
export class CatalogUcNewComponent implements OnInit {
  catalogUC = {
    catalogUCCode:"UC",
    catalogUCName:"",
    catalogUCDescription:""
  };
  constructor(
    private catalogUcService: CatalogUCService,
    private location: Location
  ) { }

  ngOnInit() {
  }
  create() {
    this.catalogUcService.createNewCatalogUC(this.catalogUC).
      subscribe(
        (response) => {
          alert("the Catalog Insecutrity Condition has been created");
          this.location.back();
        }, (error) => {
          console.log('error: ', error);
        }
      )
  }
}
