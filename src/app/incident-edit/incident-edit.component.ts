import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { IncidentCatalogService } from '../services/incident-catalog.service';
import { IncidentService } from '../services/incident.service';

@Component({
  selector: 'code-incident-edit',
  templateUrl: './incident-edit.component.html',
  styleUrls: ['./incident-edit.component.scss']
})
export class IncidentEditComponent implements OnInit {

  incidId: number;

  incident = {
    id: 0,
    incidentCode: "",
    insidentDescription: "",
    incidentObsevations: "",
    incidentRegDate: "",
    incidentWitness: "",
    incidentPlace: "",
    employeeId: 0,
    inicentCatalogId: 0
  };

  employeeList = [];
  catalogList = [];

  constructor(
    private employeservice: EmployeeService,
    private incidentCatalogservice: IncidentCatalogService,
    private incidentservice: IncidentService,
    private location: Location,
    private activateroute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activateroute.params.subscribe(
      (paramss) => {
        this.incidId = paramss.id;
        this.incidentservice.getIncidentById(this.incidId).
          subscribe(
            incident => {
              // this.affliction = affliction;
              //console.log("affliction recibida: ", affliction);
              this.incident.id = incident.id;
              this.incident.incidentCode = incident.incidentCode;
              this.incident.insidentDescription = incident.insidentDescription;
              this.incident.incidentObsevations = incident.incidentObsevations;
              this.incident.incidentRegDate = this.reformatDate(incident.incidentRegDate);
              this.incident.incidentWitness = incident.incidentWitness;
              this.incident.incidentPlace = incident.incidentPlace;
              this.incident.inicentCatalogId = incident.incidentCatalogCommandCM.id;
              this.incident.employeeId = incident.employeeCM.id;
              /* console.log('command affliction: ', this.incident); */
            }
          )
      }
    )

    this.employeservice.getEmployees().
      subscribe(
        employeeList => {
          this.employeeList = employeeList;
          /* console.log("lista de employees ", this.employeeList) */
        }
      );
    this.incidentCatalogservice.getIncidentCatalogList().
      subscribe(
        catalogList => {
          this.catalogList = catalogList;
          /* console.log("lista de catalogos ", this.catalogList) */
        }
      );
  }

  reformatDate(dateToReforme) {
    let x = new Date(dateToReforme);
    let month = (x.getMonth() + 1)+"";
    let day=(x.getDate() + 1)+"";
    if((x.getMonth() + 1)<10){
      month = "0"+ month;
    }
    if((x.getDate() + 1)<10){
      day = "0"+ day;
    }
    let reformat = x.getFullYear() + "-" + month + "-" + day;
    return reformat;
  }

  goBack(): void {
    this.location.back();
    }

  update() {
    this.incidentservice.updateIncident(this.incident).
      subscribe(
        (response) => {
          alert("the Incident has been Updated");
          this.location.back();
        }, (error) => {
          console.log('error: ', error);
        }
      )
  }
}
