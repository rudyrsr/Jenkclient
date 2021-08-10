import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CatalogTDService } from '../services/catalog-td.service';
@Component({
  selector: 'code-catalog-td-new',
  templateUrl: './catalog-td-new.component.html',
  styleUrls: ['./catalog-td-new.component.scss']
})
export class CatalogTdNewComponent implements OnInit {

  catalogTD = {
    catalogTDCode:"TD",
    catalogTDName:"",
    catalogTDDescription:""
  };
  constructor(
    private catalogTdService: CatalogTDService,
    private location: Location) { }

  ngOnInit() {
  }
  create() {
    this.catalogTdService.createNewCatalogTD(this.catalogTD).
      subscribe(
        (response) => {
          alert("the Catalog Type of Disability has been created");
          this.location.back();
        }, (error) => {
          console.log('error: ', error);
        }
      )
  }
}
