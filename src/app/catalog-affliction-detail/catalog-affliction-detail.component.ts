import { Component, OnInit } from '@angular/core';
import { AfflictionCatalog } from '../shared/afflictionCatalog';
import { AffictionCatalogService } from '../services/affiction-catalog.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'code-catalog-affliction-detail',
  templateUrl: './catalog-affliction-detail.component.html',
  styleUrls: ['./catalog-affliction-detail.component.scss']
})
export class CatalogAfflictionDetailComponent implements OnInit {

  afflictionCatalog: AfflictionCatalog;
  affictionCatalogId:number;


  constructor(
    private afflicioncatalogservice: AffictionCatalogService,
    private activateroute: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit() {
    this.activateroute.params
    .subscribe(
      (paramss) =>{
        this.affictionCatalogId = paramss.id;
        this.afflicioncatalogservice.getAfflictionCatalogById(this.affictionCatalogId)
        .subscribe(afflictionCatalog => this.afflictionCatalog = afflictionCatalog);
      }
    )
    }
    goBack(): void {
    this.location.back();
    }

    deleteToAfflictionCatalog(affCatalogID: number, affCatalogLabel: string, affcatalogName: string): void {
      let confirmar = confirm('Are you sure to delete a Catalog: '+affCatalogLabel+' named: '+ affcatalogName);
      if(confirmar)
      this.afflicioncatalogservice.deleteCatalogAffliction(affCatalogID).subscribe(
        (response) => {
          this.location.back();
        }, (error) => {
          console.log('error: ', error);
        }
      )}

}
