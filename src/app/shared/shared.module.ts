import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { SuccessNotificationComponent } from './success-notification/success-notification.component';
import { BackgroundDirective } from './background.directive';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    SuccessNotificationComponent,
    BackgroundDirective
  ],
  declarations: [SuccessNotificationComponent, BackgroundDirective]
})
export class SharedModule { }
