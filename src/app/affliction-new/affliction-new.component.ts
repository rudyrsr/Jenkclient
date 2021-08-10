import { Component, OnInit } from '@angular/core';
import { AfflictionService } from '../services/affliction.service';
import { EmployeeService } from '../services/employee.service';
import { AffictionCatalogService } from '../services/affiction-catalog.service';
import { Location } from '@angular/common';

@Component({
  selector: 'code-affliction-new',
  templateUrl: './affliction-new.component.html',
  styleUrls: ['./affliction-new.component.scss']
})
export class AfflictionNewComponent implements OnInit {

  affliction = {
    afflictionCode: "AFF",
    afflictionName: "",
    afflictionObservation: "",
    afflictionDescription: "",
    afflictionRegDate: "",
    afflictionCatalogId: "",
    employeeId: ""
  };

  employeeList = [];
  catalogList = [];

  constructor(
    private employeservice: EmployeeService,
    private affliccatalogservice: AffictionCatalogService,
    private affictionservice: AfflictionService,
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
    this.affliccatalogservice.getAfflictionsCatalogList().
      subscribe(
        catalogList => {
          this.catalogList = catalogList;
          /* console.log("lista de catalogos ", this.catalogList) */
        }
      );
  }

  create() {
    this.affictionservice.createNewAffliction(this.affliction).
      subscribe(
        (response) => {
          alert("the affliction has been created");
          this.location.back();
          /* this.affliction = affliction; */
           /* console.log("ser creo correctamente la afflicions:", this.affliction) */
        }, (error) => {
          console.log('error: ', error);
        }
        /* this.affliction = affliction; */
        /*  console.log("ser creo correctamente la afflicions:", affliction) */
      )
    /* console.log('affliction: ', this.affliction); */
  }
}



