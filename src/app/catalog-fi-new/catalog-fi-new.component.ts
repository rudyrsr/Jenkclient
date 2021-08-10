import { Component, OnInit } from '@angular/core';
import { CatalogFIService } from '../services/catalog-fi.service';
import { Location } from '@angular/common';

@Component({
  selector: 'code-catalog-fi-new',
  templateUrl: './catalog-fi-new.component.html',
  styleUrls: ['./catalog-fi-new.component.scss']
})
export class CatalogFiNewComponent implements OnInit {
    catalogFI = {
    catalogFICode:"FI",
    catalogFIName:"",
    catalogFIDescription:""
  };
   
  constructor(
    private catalogFiService: CatalogFIService,
    private location: Location
  ) { }
  ngOnInit() {
    
  }
  create() {
    this.catalogFiService.createNewCatalogFI(this.catalogFI).
      subscribe(
        (response) => {
          alert("the Catalog Factor Insecurity has been created");
          this.location.back();
        }, (error) => {
          console.log('error: ', error);
        }
      )
  }
}
