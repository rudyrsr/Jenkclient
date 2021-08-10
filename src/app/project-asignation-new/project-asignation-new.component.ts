import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { EmployeeService } from '../services/employee.service';
import { ProjectAsignationService } from '../services/project-asignation.service';
import { ProjectService } from '../services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'code-project-asignation-new',
  templateUrl: './project-asignation-new.component.html',
  styleUrls: ['./project-asignation-new.component.scss']
})
export class ProjectAsignationNewComponent implements OnInit {

  asignation = {
    assignationInitDate: "",
    assignationEndDate: "",
    projectId: "",
    employeeId: "",
  };

  employeeList = [];
  projectList = [];


  constructor(
    private employeservice: EmployeeService,
    private asignationservice: ProjectAsignationService,
    private projectservice: ProjectService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.employeservice.getEmployees().
      subscribe(
        employeeList => {
          this.employeeList = employeeList;
          /* console.log("lista de employees ", this.employeeList) */
        }
      );
    this.projectservice.getPorjectList().
      subscribe(
        projectList => {
          this.projectList = projectList;
          /* console.log("lista de proyectos ", this.projectList) */
        }
      );
  }

  create() {
    this.asignationservice.createAsignation(this.asignation).
      subscribe(
        (response) => {
          alert("the asignation has been created");
          this.location.back();
          /* console.log("ser creo correctamente la signacion:", this.asignation) */
        }, (error) => {
          console.log('error: ', error);
        }

      )
    /* console.log("ser creo correctamente la asignation:", this.asignation); */
  }
}


