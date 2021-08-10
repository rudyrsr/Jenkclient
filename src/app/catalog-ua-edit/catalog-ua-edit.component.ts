import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { CatalogUA } from '../shared/catalogUA';
import { CatalogUAService } from '../services/catalog-ua.service';
@Component({
  selector: 'code-catalog-ua-edit',
  templateUrl: './catalog-ua-edit.component.html',
  styleUrls: ['./catalog-ua-edit.component.scss']
})
export class CatalogUaEditComponent implements OnInit {
  catalogUA:CatalogUA;
  catalogUAId:number;
  catalogList = [];
  constructor(
    private catalogUAService: CatalogUAService,
    private activateroute: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.activateroute.params
    .subscribe(
      (paramss) =>{
        this.catalogUAId = paramss.id;
        this.catalogUAService.getCatalogUAById(this.catalogUAId)
        .subscribe(catalogUA=> this.catalogUA = catalogUA);
      }
    );
  }
  edit() {
    this.catalogUAService.updateCatalogUA(this.catalogUA).
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
