import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { MachineryService } from '../services/machinery.service';
import { AsignationMachineryService } from '../services/asignation-machinery.service';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'code-asignation-machinery-edit',
  templateUrl: './asignation-machinery-edit.component.html',
  styleUrls: ['./asignation-machinery-edit.component.scss']
})
export class AsignationMachineryEditComponent implements OnInit {

  asignationMachineryId:number;
  asignationMachinery={
    id:0,
    assignationInitDate: '' ,
    assignationEndDate: '' ,
    employeeId:0 ,
    machineryId:0,
  }

  employeeList = [];

  machineryList= [];

  constructor(
    private employeservice: EmployeeService,
    private asignationMachineryservice: AsignationMachineryService,
    private machineryservice: MachineryService,
    private location: Location,
    private activateroute: ActivatedRoute

  ) { }

  ngOnInit() {

    this.activateroute.params
    .subscribe((paramss) => {
        this.asignationMachineryId = paramss.id;
        this.asignationMachineryservice.getAsigantionById(this.asignationMachineryId)
        .subscribe(
          asignationRecuperada =>{
            
            this.asignationMachinery.id =asignationRecuperada.id;
            this.asignationMachinery.assignationInitDate= this.reformatDate(asignationRecuperada.assignationInitDate);
            this.asignationMachinery.assignationEndDate= this.reformatDate(asignationRecuperada.assignationEndDate);
            this.asignationMachinery.employeeId= asignationRecuperada.employeeCE.id;
            this.asignationMachinery.machineryId = asignationRecuperada.machineryCM.id;
            /* console.log("asignacion recuperada: " , asignationRecuperada);
            console.log("asignacion para mostrar machinery id: ",this.asignationMachinery.machineryId);
            console.log("asignacion para mostrar employee id: ",this.asignationMachinery.employeeId); */
          }
        );
      }
    )


    this.employeservice.getEmployees().
    subscribe(
      employeeList => {
        this.employeeList = employeeList;
      }
    );
  
  this.machineryservice.getMachineryList().
    subscribe(
      machineryList => {
        this.machineryList = machineryList;
        /* console.log("lista de maquinarias",this.machineryList) */
      }
    );
  }

reformatDate(dateToReforme) {
  let x = new Date(dateToReforme);
  let month = (x.getMonth() + 1) + '';
  let day = (x.getDate() + 1)+ '';
  if ((x.getMonth() + 1) < 10) {
    month = '0' + month;
  }
  if ((x.getDate() + 1) < 10) {
    day = '0' + day;
  }
  let reformat = x.getFullYear() + '-' + month + '-' + day;
  return reformat;
}

goBack(): void {
  this.location.back();
}

edit() {
  this.asignationMachineryservice.updateAsignation(this.asignationMachinery).
    subscribe(
      (response) => {
        alert('the Asignation has been Updated');
        this.location.back();
      }, (error) => {
        console.log('error:' , error);

      }
    );
}
}
