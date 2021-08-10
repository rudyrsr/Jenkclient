import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { EmployeeService } from '../services/employee.service';
import { IncidentCatalogService } from '../services/incident-catalog.service';
import { IncidentService } from '../services/incident.service';

@Component({
  selector: 'code-incident-new',
  templateUrl: './incident-new.component.html',
  styleUrls: ['./incident-new.component.scss']
})
export class IncidentNewComponent implements OnInit {

  incident = {
    incidentCode: "INC",
    insidentDescription: "",
    employeeId: "",
    incidentObsevations: "",
    incidentRegDate: "",
    incidentWitness: "",
    incidentPlace: "",
    inicentCatalogId: ""
  };



  employeeList = [];
  catalogList = [];

  constructor(
    private employeservice: EmployeeService,
    private incidentcatalogservice: IncidentCatalogService,
    private incidentservice: IncidentService,
    private location: Location
  ) { }

  ngOnInit() {
    this.employeservice.getEmployees().
      subscribe(
        employeeList => {
          this.employeeList = employeeList;
          /* console.log("lista de employees ", this.employeeList) */
        }
      );
    this.incidentcatalogservice.getIncidentCatalogList().
      subscribe(
        catalogList => {
          this.catalogList = catalogList;
          /* console.log("lista de catalogos ", this.catalogList) */
        }
      );
  }

  create() {
    this.incidentservice.createNewIncident(this.incident).
      subscribe(
        (response) => {
          alert("the incident has been created");
          this.location.back();
          /* console.log("ser creo correctamente el incidente:", this.incident) */
        }, (error) => {
          console.log('error: ', error);
        }

      )
    /* console.log("ser creo correctamente el incidente:", this.incident); */
  }
}



