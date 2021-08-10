import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityIssuesRoutingModule } from './security-issues-routing.module';
import { SecurityIssuesComponent } from './security-issues.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SecurityIssuesRoutingModule
  ],
  declarations: [SecurityIssuesComponent]
})
export class SecurityIssuesModule { }
