import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Project } from '../shared/project';
import { ProjectService } from '../services/project.service';
import {ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'code-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  project: Project;
  projectID:number;

  constructor(
    private projectservice: ProjectService,
    private activateroute: ActivatedRoute,
    private location: Location) {
  }

  ngOnInit() {
    this.activateroute.params
    .subscribe(
      (paramss) =>{
        this.projectID = paramss.id;
        this.projectservice.getPorjectById(this.projectID)
        .subscribe(project => this.project = project);
      }
    )
    }
    goBack(): void {
    this.location.back();
    }


    deleteProject(projecID: number, projectLabel: string, porjectName: string): void {
      let confirmar = confirm('Are you sure to delete a Project: '+projectLabel+' named: '+ porjectName);
      if(confirmar)
      this.projectservice.deletePorject(projecID).subscribe(
        (response) => {
          this.location.back();
        }, (error) => {
          console.log('error: ', error);
        }
      )}

}
