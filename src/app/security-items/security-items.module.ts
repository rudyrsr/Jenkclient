import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SecurityItemsRoutingModule} from './security-items-routing.module';
import {SecurityItemsComponent} from './security-items.component';
import {MaterialModule} from '../shared/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SecurityItemsRoutingModule
  ],
  declarations: [SecurityItemsComponent]
})
export class SecurityItemsModule {
}
