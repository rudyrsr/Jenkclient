import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogsRoutingModule } from './catalogs-routing.module';
import { CatalogsComponent } from './catalogs.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    CatalogsRoutingModule
  ],
  declarations: [CatalogsComponent]
})
export class CatalogsModule { }
