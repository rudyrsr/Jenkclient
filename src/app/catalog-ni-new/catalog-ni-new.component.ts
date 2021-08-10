import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CatalogNIService } from '../services/catalog-ni.service';
@Component({
  selector: 'code-catalog-ni-new',
  templateUrl: './catalog-ni-new.component.html',
  styleUrls: ['./catalog-ni-new.component.scss']
})
export class CatalogNiNewComponent implements OnInit {

  catalogNI = {
    catalogNICode:"NI",
    catalogNIName:"",
    catalogNIDescription:""
  };
  constructor(
    private catalogNiService: CatalogNIService,
    private location: Location
  ) { }

  ngOnInit() {
  }
  create() {
    this.catalogNiService.createNewCatalogNI(this.catalogNI).
      subscribe(
        (response) => {
          alert("the Catalog Natural Injury has been created");
          this.location.back();
        }, (error) => {
          console.log('error: ', error);
        }
      )
  }
}
