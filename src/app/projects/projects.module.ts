import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ProjectsRoutingModule
  ],
  declarations: [ProjectsComponent]
})
export class ProjectsModule { }
