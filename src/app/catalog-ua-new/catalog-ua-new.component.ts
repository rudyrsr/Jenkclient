import { Component, OnInit } from '@angular/core';
import { CatalogUAService } from '../services/catalog-ua.service';
import { Location } from '@angular/common';
@Component({
  selector: 'code-catalog-ua-new',
  templateUrl: './catalog-ua-new.component.html',
  styleUrls: ['./catalog-ua-new.component.scss']
})
export class CatalogUaNewComponent implements OnInit { 
  catalogUA= {
    catalogUACode:"UA",
    catalogUAName:"",
    catalogUADescription:""
  };
  constructor(
    private catalogUAService: CatalogUAService,
    private location: Location
  ) { }

  ngOnInit() {
  }
  create() {
    this.catalogUAService.createNewCatalogUA(this.catalogUA).
      subscribe(
        (response) => {
          alert("the Catalog Insecutrity Act has been created");
          this.location.back();
        }, (error) => {
          console.log('error: ', error);
        }
      )
  }
}