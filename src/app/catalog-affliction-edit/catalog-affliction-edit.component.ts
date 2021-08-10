import { Component, OnInit } from '@angular/core';
import { AffictionCatalogService } from '../services/affiction-catalog.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'code-catalog-affliction-edit',
  templateUrl: './catalog-affliction-edit.component.html',
  styleUrls: ['./catalog-affliction-edit.component.scss']
})
export class CatalogAfflictionEditComponent implements OnInit {

  afficCataloID: number;

  afflictionCatalog = {
    afflictionCatalogCode: "",
    afflictionCatalogName: "",
    afflictionCatalogDescription: ""
  };

  constructor(
    private affliccatalogservice: AffictionCatalogService,
    private location: Location,
    private activateroute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activateroute.params.subscribe(
      (paramss) => {
        this.afficCataloID = paramss.id;
        this.affliccatalogservice.getAfflictionCatalogById(this.afficCataloID).
          subscribe(
            afflictionCatalog => {
              this.afflictionCatalog = afflictionCatalog;
            }
          )
      }
    )
  }


  goBack(): void {
    this.location.back();
  }
  update() {

    this.affliccatalogservice.updateCatalogAffliction(this.afflictionCatalog).
      subscribe(
        (response) => {
          alert("the affliction Catalog has been Updated");
          this.location.back();
        }, (error) => {
          console.log('error: ', error);
        }
      )

  }
}
