import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';
import { CatalogUC } from '../shared/catalogUC';
import { CatalogUCService } from '../services/catalog-uc.service';
import { CatalogUCComponent } from '../catalog-uc/catalog-uc.component';
@Component({
  selector: 'code-catalog-uc-detail',
  templateUrl: './catalog-uc-detail.component.html',
  styleUrls: ['./catalog-uc-detail.component.scss']
})
export class CatalogUcDetailComponent implements OnInit {
  catalogUC: CatalogUCComponent;
  catalogUcID: number;

  constructor(
    private catalogUcService:CatalogUCService,
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
          this.catalogUcID = paramss.id;
          this.catalogUcService.getCatalogUCById(this.catalogUcID)
          .subscribe(catalogUC => this.catalogUC = catalogUC);
        }
      )
  }
  deleteToCatalogUC(catalogID: number,Description: string): void {
    let confirmar = confirm('Are you sure to delete a CatalogUC: '+catalogID+' of '+ Description);
    if(confirmar)
    this.catalogUcService.deleteCatalogUC(catalogID).subscribe(
      (response) => {
        this.location.back();
      }, (error) => {
        console.log('error: ', error);
      }
    )}

}
