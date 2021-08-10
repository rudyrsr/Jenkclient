import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import { Incident } from '../shared/incident';
import { IncidentService } from '../services/incident.service';

@Component({
  selector: 'code-incident-detail',
  templateUrl: './incident-detail.component.html',
  styleUrls: ['./incident-detail.component.scss']
})
export class IncidentDetailComponent implements OnInit {
  incident: Incident;
  incidentId:number;



  constructor(
    private incidentservice: IncidentService,
    private activateroute: ActivatedRoute,
    private location: Location) {
  }

  ngOnInit() {
    this.activateroute.params
    .subscribe(
      (paramss) =>{
        this.incidentId = paramss.id;
        this.incidentservice.getIncidentById(this.incidentId)
        .subscribe(incident => this.incident = incident);
      }
    )
    }
    goBack(): void {
    this.location.back();
    }


    deleteToIncident(IncidentID: number, IncidetnType: string, IncidentEmployee: string): void {
      let confirmar = confirm('Are you sure to delete a Incident: '+IncidetnType+' of '+ IncidentEmployee);
      if(confirmar)
      this.incidentservice.deleteIncident(IncidentID).subscribe(
        (response) => {
          this.location.back();
        }, (error) => {
          console.log('error: ', error);
        }
      )}

}
