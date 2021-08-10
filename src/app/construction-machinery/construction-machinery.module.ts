import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConstructionMachineryRoutingModule } from './construction-machinery-routing.module';
import { ConstructionMachineryComponent } from './construction-machinery.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ConstructionMachineryRoutingModule,
  ],
  declarations: [ConstructionMachineryComponent]
})
export class ConstructionMachineryModule { }
