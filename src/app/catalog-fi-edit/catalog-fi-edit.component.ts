import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {CatalogFI} from '../shared/catalogFI';
import {CatalogFIService} from '../services/catalog-fi.service';

@Component({
  selector: 'code-catalog-fi-edit',
  templateUrl: './catalog-fi-edit.component.html',
  styleUrls: ['./catalog-fi-edit.component.scss']
})
export class CatalogFiEditComponent implements OnInit {

  catalogFI:CatalogFI;
  catalogFIId:number;
  catalogList = [];
  constructor(
    private catalogFIService: CatalogFIService,
    private activateroute: ActivatedRoute,
    private location: Location,
    private router: Router) { }

    ngOnInit() {
      this.activateroute.params
      .subscribe(
        (paramss) =>{
          this.catalogFIId = paramss.id;
          this.catalogFIService.getCatalogFIById(this.catalogFIId)
          .subscribe(catalogFI => this.catalogFI = catalogFI);
        }
      );
    }
    edit() {
      this.catalogFIService.updateCatalogFI(this.catalogFI).
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
