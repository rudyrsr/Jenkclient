import { Component, OnInit } from '@angular/core';
import { CatalogNI } from '../shared/catalogNI';
import { CatalogNIService } from '../services/catalog-ni.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'code-catalog-ni-detail',
  templateUrl: './catalog-ni-detail.component.html',
  styleUrls: ['./catalog-ni-detail.component.scss']
})
export class CatalogNiDetailComponent implements OnInit {
  catalogNI: CatalogNI;
  catalogNiID: number; 
  constructor(
    private catalogNiService:CatalogNIService,
    private activateroute: ActivatedRoute,
    private location: Location ) {

   }

   ngOnInit() {
    this.activateroute.params
    .subscribe(
      (paramss) => {  
        this.catalogNiID = paramss.id;
        this.catalogNiService.getCatalogNIById(this.catalogNiID)
        .subscribe(catalogNI => this.catalogNI = catalogNI);
      }
    )
}
goBack(): void {
  this.location.back();
  }
  deleteToCatalogNI(catalogID: number,Description: string): void {
    let confirmar = confirm('Are you sure to delete a CatalogNI: '+catalogID+' of '+ Description);
    if(confirmar)
    this.catalogNiService.deleteCatalogNI(catalogID).subscribe(
      (response) => {
        this.location.back();
      }, (error) => {
        console.log('error: ', error);
      }
    )}

}
