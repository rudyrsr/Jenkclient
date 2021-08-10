import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { MachineryService } from '../services/machinery.service';
import { AsignationMachineryService } from '../services/asignation-machinery.service';
import { Location } from '@angular/common';


@Component({
  selector: 'code-asignation-machinery-new',
  templateUrl: './asignation-machinery-new.component.html',
  styleUrls: ['./asignation-machinery-new.component.scss']
})
export class AsignationMachineryNewComponent implements OnInit {
  asignationMachinery={
    assignationInitDate: "",
    assignationEndDate: "",
    description: "",
    employeeId:"" ,
    machineryId:"",

  }
  employeeList = [];
  machineryList= [];
  constructor(
    private employeservice: EmployeeService,
    private machineryservice: MachineryService,
    private asignationMachineryservice: AsignationMachineryService,
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
  this.machineryservice.getMachineryList().
    subscribe(
      machineryList => {
        this.machineryList = machineryList;
      }
    );
}

create() {
  this.asignationMachineryservice.createNewAsignation(this.asignationMachinery).
    subscribe(
      (response) => {
        alert("the Asignation has been created");
        this.location.back();
      }, (error) => {
        console.log('error: ', error);
      }
    )
 
  }

}
