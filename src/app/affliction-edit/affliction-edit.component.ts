import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { AffictionCatalogService } from '../services/affiction-catalog.service';
import { AfflictionService } from '../services/affliction.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'code-affliction-edit',
  templateUrl: './affliction-edit.component.html',
  styleUrls: ['./affliction-edit.component.scss']
})
export class AfflictionEditComponent implements OnInit {

  afflicId: number;

  affliction = {
    id: 0,
    afflictionCode: "",
    afflictionName: "",
    afflictionObservation: "",
    afflictionDescription: "",
    afflictionRegDate: "",
    afflictionCatalogId: 0,
    employeeId: 0
  };

  afflictionReciber;

  employeeList = [];
  catalogList = [];

  constructor(
    private employeservice: EmployeeService,
    private affliccatalogservice: AffictionCatalogService,
    private affictionservice: AfflictionService,
    private location: Location,
    private activateroute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.activateroute.params.subscribe(
      (paramss) => {
        this.afflicId = paramss.id;
        this.affictionservice.getAfflictionById(this.afflicId).
          subscribe(
            affliction => {
              // this.affliction = affliction;
              //console.log("affliction recibida: ", affliction);
              this.affliction.id = affliction.id;
              this.affliction.afflictionCode = affliction.afflictionCode;
              this.affliction.afflictionName = affliction.afflictionName;
              this.affliction.afflictionObservation = affliction.afflictionObservation;
              this.affliction.afflictionDescription = affliction.afflictionDescription;
              this.affliction.afflictionRegDate = this.reformatDate(affliction.afflictionRegDate);
              this.affliction.afflictionCatalogId = affliction.afflictionCatalogCM.id;
              this.affliction.employeeId = affliction.employeeCommand.id;
              /* console.log('command affliction: ', affliction); */

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
    this.affliccatalogservice.getAfflictionsCatalogList().
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
    this.affictionservice.updateAffliction(this.affliction).
      subscribe(
        affliction => {
          alert("The affliction has been updated")
          this.location.back();
        },(error)=>{
          console.log('error', error);
        }
      )
  }

}
