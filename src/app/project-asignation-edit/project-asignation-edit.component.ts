import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { ProjectAsignationService } from '../services/project-asignation.service';
import { ProjectService } from '../services/project.service';
import { ActivatedRoute } from '@angular/router';
import { Location, DatePipe } from '@angular/common';
import { ProjectAsignation } from '../shared/projectAsignation';

@Component({
  selector: 'code-project-asignation-edit',
  templateUrl: './project-asignation-edit.component.html',
  styleUrls: ['./project-asignation-edit.component.scss']
})
export class ProjectAsignationEditComponent implements OnInit {

  asignationId: number;
  // assignation: ProjectAsignation;
  // initDate: Date;
  // endDate: Date;
  assignation = {
    id: 0,
    assignationInitDate: '',
    assignationEndDate: '',
    projectId: 0,
    employeeId: 0
  };

  employeeList = [];
  projectList = [];

  constructor(
    private employeservice: EmployeeService,
    private asignationservice: ProjectAsignationService,
    private projectservice: ProjectService,
    private location: Location,
    private datepipe: DatePipe,
    private activateroute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.activateroute.params.subscribe(
      (paramss) => {
        this.asignationId = paramss.id;
        this.asignationservice.getAsigPorjectById(this.asignationId).
          subscribe(
            assignation => {
              //this.assignation=assignacionRecuperada;
              //this.initDate = new Date(this.assignation.assignationInitDate);
              //this.endDate = new Date(this.assignation.assignationEndDate);
              //console.log('command affliction: ', assignacionRecuperada);
              this.assignation.id = assignation.id;
              this.assignation.assignationInitDate = this.reformatDate(assignation.assignationInitDate);
              this.assignation.assignationEndDate = this.reformatDate(assignation.assignationEndDate);
              this.assignation.projectId = assignation.projectCM.id;
              this.assignation.employeeId = assignation.employeeCM.id;
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
    this.projectservice.getPorjectList().
      subscribe(
        projectList => {
          this.projectList = projectList;
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
    //this.assignation.assignationInitDate = this.datepipe.transform(this.initDate, 'yyyy-MM-ddT00:00:00.000+0000');
    //this.assignation.assignationEndDate = this.datepipe.transform(this.endDate, 'yyyy-MM-ddT00:00:00.000+0000');
    this.asignationservice.updateProjectAsignation(this.assignation).
      subscribe(
        (response) => {
          alert('the Asignation has been Updated');
          this.location.back();
        }, (error) => {
          console.log('error: ', error);
        }
      )
  }
}

