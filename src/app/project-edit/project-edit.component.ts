import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { Location } from '@angular/common';

@Component({
  selector: 'code-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit {


  projectId: number;

  project = {
    id:0,
    projectCode: "",
    projectName: "",
    projectDescription: "",
    projectLocation: "",
    projectInitDate: "",
    projectEndDate: "",
    activate:true
  };

  constructor(
    private projectservice: ProjectService,
    private location: Location,
    private activateroute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activateroute.params.subscribe(
      (paramss) => {
        this.projectId = paramss.id;
        this.projectservice.getPorjectById(this.projectId).
          subscribe(
            project => {
              this.project.id=project.id;
              this.project.projectCode = project.projectCode;
              this.project.projectName = project.projectName;
              this.project.projectDescription = project.projectDescription;
              this.project.projectLocation = project.projectLocation;
              this.project.projectInitDate = this.reformatDate(project.projectInitDate);
              this.project.projectEndDate = this.reformatDate(project.projectEndDate);
              /* this.project.activate= project.activate; */

            }
          )
      }
    )
  }


  goBack(): void {
    this.location.back();
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

  update() {
    this.projectservice.updateProject(this.project).
      subscribe(
        (response) => {
          alert("the project has been Updated");
          this.location.back();
        }, (error) => {
          console.log('error: ', error);
        }
      )
  }
}
