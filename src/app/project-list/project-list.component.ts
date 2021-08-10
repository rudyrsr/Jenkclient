import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'code-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projectList: Project[];

  displayedColumns = ['label', 'name', 'initdate','enddate','active' ,'view'];
  dataSource:Project[]= [];
  constructor(
    private projectservice: ProjectService
  ) { }

  ngOnInit() {

    this.projectservice.getPorjectList()
      .subscribe(projectList => {
        this.projectList = projectList
    });
  }

}
