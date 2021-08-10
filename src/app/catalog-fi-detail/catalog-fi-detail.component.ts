import { Component, OnInit } from '@angular/core';
import { CatalogFI } from '../shared/catalogFI';
import { CatalogFIService } from '../services/catalog-fi.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'code-catalog-fi-detail',
  templateUrl: './catalog-fi-detail.component.html',
  styleUrls: ['./catalog-fi-detail.component.scss']
})
export class CatalogFiDetailComponent implements OnInit {
  catalogFI: CatalogFI;
  catalogFiID: number; 
  constructor (
    private catalogFiService:CatalogFIService,
    private activateroute: ActivatedRoute,
    private location: Location) {

     }
  ngOnInit() {
    this.activateroute.params
    .subscribe(
      (paramss) => {  
        this.catalogFiID = paramss.id;
        this.catalogFiService.getCatalogFIById(this.catalogFiID)
        .subscribe(catalogFI => this.catalogFI = catalogFI);
      }
    )
    }
    goBack(): void {
    this.location.back();
    }
    deleteToCatalogFI(catalogID: number,Description: string): void {
      let confirmar = confirm('Are you sure to delete a CatalogFI: '+catalogID+' of '+ Description);
      if(confirmar)
      this.catalogFiService.deleteCatalogFI(catalogID).subscribe(
        (response) => {
          this.location.back();
        }, (error) => {
          console.log('error: ', error);
        }
      )}
  }