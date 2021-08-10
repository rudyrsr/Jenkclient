import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import { CatalogTD } from '../shared/catalogTD';
import { CatalogTDService } from '../services/catalog-td.service';
@Component({
  selector: 'code-catalog-td-edit',
  templateUrl: './catalog-td-edit.component.html',
  styleUrls: ['./catalog-td-edit.component.scss']
})
export class CatalogTdEditComponent implements OnInit {
  catalogTD:CatalogTD;
  catalogTDId:number;
  catalogList = [];
  constructor(
    private catalogTDService: CatalogTDService,
    private activateroute: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.activateroute.params
    .subscribe(
      (paramss) =>{
        this.catalogTDId = paramss.id;
        this.catalogTDService.getCatalogTDById(this.catalogTDId)
        .subscribe(catalogTD=> this.catalogTD = catalogTD);
      }
    );
  }
  edit() {
    this.catalogTDService.updateCatalogTD(this.catalogTD).
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
