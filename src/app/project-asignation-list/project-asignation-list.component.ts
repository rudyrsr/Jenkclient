import { Component, OnInit } from '@angular/core';
import { ProjectAsignation } from '../shared/projectAsignation';
import { ProjectAsignationService } from '../services/project-asignation.service';
import {Location} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'code-project-asignation-list',
  templateUrl: './project-asignation-list.component.html',
  styleUrls: ['./project-asignation-list.component.scss']
})
export class ProjectAsignationListComponent implements OnInit {

  projectAsingList: ProjectAsignation[];


  displayedColumns = ['label','employee', 'project', 'initdate','enddate','edit', 'delete'];
  dataSource:ProjectAsignation[]= [];

  constructor(
    private projectasignservice: ProjectAsignationService,
    private location:Location,
    private router: Router
  ) { }

  ngOnInit() {

    this.projectasignservice.getAsigPorjectList()
      .subscribe(projectAsingList => {
        this.projectAsingList = projectAsingList

    });
  }


  deleteAsignationProject(AsignationId: number): void {
    let confirmar = confirm('Are you sure to delete a Assigment Project: '+AsignationId);
    if(confirmar){
    this.projectasignservice.deleteAsigPorject(AsignationId).subscribe(
      (data) => {
      this.ngOnInit();
      // this.location.back();
      }
    )
  }
  }

}
