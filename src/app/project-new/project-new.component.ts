import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Location } from '@angular/common';

@Component({
  selector: 'code-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.scss']
})
export class ProjectNewComponent implements OnInit {

  project = {
    projectCode: "PRJ",
    projectName: "",
    projectDescription: "",
    projectLocation: "",
    projectInitDate: "",
    projectEndDate: ""
  };

  constructor(
    private projectservice: ProjectService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  create() {
    this.projectservice.createNewProject(this.project).
      subscribe(
        (response) => {
          alert("the Project has been created");
          this.location.back();
          /* console.log("ser creo correctamente el incidente:", this.project) */
        }, (error) => {
          console.log('error: ', error);
        }

      )
    /* console.log("ser creo correctamente el incidente:", this.incident); */
  }
}

