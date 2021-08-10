import { Component, OnInit } from '@angular/core';
import { CatalogUC } from '../shared/catalogUC';
import { CatalogUCService } from '../services/catalog-uc.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'code-catalog-uc-edit',
  templateUrl: './catalog-uc-edit.component.html',
  styleUrls: ['./catalog-uc-edit.component.scss']
})
export class CatalogUcEditComponent implements OnInit {
  catalogUC:CatalogUC;
  catalogUCId:number;
  catalogList = [];
  constructor(
    private catalogUCService: CatalogUCService,
    private activateroute: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.activateroute.params
    .subscribe(
      (paramss) =>{
        this.catalogUCId = paramss.id;
        this.catalogUCService.getCatalogUCById(this.catalogUCId)
        .subscribe(catalogUC=> this.catalogUC = catalogUC);
      }
    );
  }
  edit() {
    this.catalogUCService.updateCatalogUC(this.catalogUC).
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
