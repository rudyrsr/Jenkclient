import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { CatalogTD } from '../shared/catalogTD';
import { CatalogTDService } from '../services/catalog-td.service';
@Component({
  selector: 'code-catalog-td-detail',
  templateUrl: './catalog-td-detail.component.html',
  styleUrls: ['./catalog-td-detail.component.scss']
})
export class CatalogTdDetailComponent implements OnInit {
  catalogTD: CatalogTD;
  catalogTdID: number; 
  constructor(
    private catalogTdService:CatalogTDService,
    private activateroute: ActivatedRoute,
    private location: Location ) {

   }
   goBack(): void {
    this.location.back();
    }
   ngOnInit() {
    this.activateroute.params
    .subscribe(
      (paramss) => {  
        this.catalogTdID = paramss.id;
        this.catalogTdService.getCatalogTDById(this.catalogTdID)
        .subscribe(catalogTD => this.catalogTD =catalogTD);
      }
    )
}
deleteToCatalogTD(catalogID: number,Description: string): void {
  let confirmar = confirm('Are you sure to delete a CatalogTD: '+catalogID+' of '+ Description);
  if(confirmar)
  this.catalogTdService.deleteCatalogTD(catalogID).subscribe(
    (response) => {
      this.location.back();
    }, (error) => {
      console.log('error: ', error);
    }
  )}

}
