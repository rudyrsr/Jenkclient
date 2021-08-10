import { Component, OnInit } from '@angular/core';
import { IncidentCatalogService } from '../services/incident-catalog.service';
import { Location } from '@angular/common';

@Component({
  selector: 'code-catalog-incident-new',
  templateUrl: './catalog-incident-new.component.html',
  styleUrls: ['./catalog-incident-new.component.scss']
})
export class CatalogIncidentNewComponent implements OnInit {


  incidentCatalog = {
    incidentCatalogCode: "INSCAT",
    incidenCatalogName: "",
    insidentCatalogDescription: ""
  };


  constructor(
    private incidetncatalogservice: IncidentCatalogService,
    private location: Location
  ) { }

  ngOnInit() {

  }
  create() {
    this.incidetncatalogservice.createNewCatalogIncident(this.incidentCatalog).
      subscribe(
        (response) => {
          alert("the Incident Catalog has been created");
          this.location.back();
        }, (error) => {
          console.log('error: ', error);
        }
      )
  }
}
