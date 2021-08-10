import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { CatalogUA } from '../shared/catalogUA';
import { CatalogUAService } from '../services/catalog-ua.service';
import { CatalogUAComponent } from '../catalog-ua/catalog-ua.component';
@Component({
  selector: 'code-catalog-ua-detail',
  templateUrl: './catalog-ua-detail.component.html',
  styleUrls: ['./catalog-ua-detail.component.scss']
})
export class CatalogUaDetailComponent implements OnInit {

  catalogUA: CatalogUAComponent;
  catalogUaID: number;

  constructor(
    private catalogUaService:CatalogUAService,
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
        this.catalogUaID = paramss.id;
        this.catalogUaService.getCatalogUAById(this.catalogUaID)
        .subscribe(catalogUA => this.catalogUA = catalogUA);
      }
    )
}
deleteToCatalogUA(catalogID: number,Description: string): void {
  let confirmar = confirm('Are you sure to delete a CatalogUA: '+catalogID+' of '+ Description);
  if(confirmar)
  this.catalogUaService.deleteCatalogUA(catalogID).subscribe(
    (response) => {
      this.location.back();
    }, (error) => {
      console.log('error: ', error);
    }
  )}

}
