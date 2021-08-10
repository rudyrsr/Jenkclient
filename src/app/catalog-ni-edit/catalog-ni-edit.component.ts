import { Component, OnInit } from '@angular/core';
import { CatalogNI } from '../shared/catalogNI';
import {Location} from '@angular/common';
import { CatalogNIService } from '../services/catalog-ni.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'code-catalog-ni-edit',
  templateUrl: './catalog-ni-edit.component.html',
  styleUrls: ['./catalog-ni-edit.component.scss']
})
export class CatalogNiEditComponent implements OnInit {
  catalogNI:CatalogNI;
  catalogNIId:number;
  catalogList = [];
  constructor(
    private catalogNIService: CatalogNIService,
    private activateroute: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.activateroute.params
    .subscribe(
      (paramss) =>{
        this.catalogNIId = paramss.id;
        this.catalogNIService.getCatalogNIById(this.catalogNIId)
        .subscribe(catalogNI=> this.catalogNI = catalogNI);
      }
    );
  }
  edit() {
    this.catalogNIService.updateCatalogNI(this.catalogNI).
      subscribe(
        (response) => {
          alert("the Catalog has been updated");
          this.location.back();
        }, (error) => {
          console.log('error: ', error);
        }
      )
  }
}
