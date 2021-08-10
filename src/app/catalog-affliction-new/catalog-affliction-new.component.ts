import { Component, OnInit } from '@angular/core';
import { AffictionCatalogService } from '../services/affiction-catalog.service';
import { Location } from '@angular/common';

@Component({
  selector: 'code-catalog-affliction-new',
  templateUrl: './catalog-affliction-new.component.html',
  styleUrls: ['./catalog-affliction-new.component.scss']
})
export class CatalogAfflictionNewComponent implements OnInit {

  afflictionCatalog = {
    afflictionCatalogCode: "AFFCAT",
    afflictionCatalogName: "",
    afflictionCatalogDescription: ""
  };


  constructor(
    private affliccatalogservice: AffictionCatalogService,
    private location: Location
  ) { }

  ngOnInit() {

  }
  create() {
    this.affliccatalogservice.createNewCatalogAffliction(this.afflictionCatalog).
      subscribe(
        (response) => {
          alert("the affliction Catalog has been created");
          this.location.back();
        }, (error) => {
          console.log('error: ', error);
        }
      )
  }
}



