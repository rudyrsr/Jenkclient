import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HumanResourcesRoutingModule } from './human-resources-routing.module';
import { HumanResourcesComponent } from './human-resources.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HumanResourcesRoutingModule
  ],
  declarations: [HumanResourcesComponent]
})
export class HumanResourcesModule { }
