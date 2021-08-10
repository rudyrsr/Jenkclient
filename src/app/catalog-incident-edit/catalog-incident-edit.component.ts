import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { IncidentCatalogService } from '../services/incident-catalog.service';

@Component({
  selector: 'code-catalog-incident-edit',
  templateUrl: './catalog-incident-edit.component.html',
  styleUrls: ['./catalog-incident-edit.component.scss']
})
export class CatalogIncidentEditComponent implements OnInit {

  incidCatId: number;

  incidentCatalog = {
    incidentCatalogCode: "",
    incidenCatalogName: "",
    insidentCatalogDescription: ""
  };

  constructor(
    private incidentCatalogservice: IncidentCatalogService,
    private location: Location,
    private activateroute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activateroute.params.subscribe(
      (paramss) => {
        this.incidCatId = paramss.id;
        this.incidentCatalogservice.getIncidentCatalogById(this.incidCatId).
          subscribe(
            incidentCatalog => {
              this.incidentCatalog = incidentCatalog;
            }
          )
      }
    )
  }

  goBack(): void {
    this.location.back();
  }
  update() {
    this.incidentCatalogservice.updateCatalogIncident(this.incidentCatalog).
      subscribe(
        (response) => {
          alert("the Incidetn Catalog has been Updated");
          this.location.back();
        }, (error) => {
          console.log('error: ', error);
        }
      )

  }
}

