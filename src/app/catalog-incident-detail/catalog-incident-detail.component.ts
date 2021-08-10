import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { IncidentCatalog } from '../shared/incidentCatalog';
import { IncidentCatalogService } from '../services/incident-catalog.service';

@Component({
  selector: 'code-catalog-incident-detail',
  templateUrl: './catalog-incident-detail.component.html',
  styleUrls: ['./catalog-incident-detail.component.scss']
})
export class CatalogIncidentDetailComponent implements OnInit {

  incidentCatalog: IncidentCatalog;
  indicentCatalogId:number;


  constructor(
    private incidentcatalogservice: IncidentCatalogService,
    private activateroute: ActivatedRoute,
    private location: Location) {}

  ngOnInit() {
    this.activateroute.params
    .subscribe(
      (paramss) =>{
        this.indicentCatalogId = paramss.id;
        this.incidentcatalogservice.getIncidentCatalogById(this.indicentCatalogId)
        .subscribe(incidentCatalog => this.incidentCatalog = incidentCatalog);
      }
    )
    }
    goBack(): void {
    this.location.back();
    }


    deleteToIncidentCatalog(incidCatalogID: number, incidCatalogLabel: string, incidcatalogName: string): void {
      let confirmar = confirm('Are you sure to delete a Catalog: '+incidCatalogLabel+' Type: '+ incidcatalogName);
      if(confirmar)
      this.incidentcatalogservice.deleteIncidentCatalog(incidCatalogID).subscribe(
        (response) => {
          this.location.back();
        }, (error) => {
          console.log('error: ', error);
        }
      )}

}
