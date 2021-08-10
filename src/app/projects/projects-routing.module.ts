import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProjectListComponent } from '../project-list/project-list.component';
import { ProjectAsignationListComponent } from '../project-asignation-list/project-asignation-list.component';

const routes: Routes = [
  {
    path: 'projects',
    component: ProjectsComponent,
    children:[
      {
        path: 'project',
        component: ProjectListComponent
      },
      {
        path: 'assignmentProject',
        component: ProjectAsignationListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
