import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConstructionMachineryComponent } from './construction-machinery.component';
import { MachineryListComponent } from '../machinery-list/machinery-list.component';
import { MaintenanceListComponent } from '../maintenance-list/maintenance-list.component';
import { AsignationMachineryListComponent } from '../asignation-machinery-list/asignation-machinery-list.component';

const routes: Routes = [
  {
    path: 'construction-machinery',
    component: ConstructionMachineryComponent,
    children:[
      {
        path: 'machinery',
        component: MachineryListComponent
      },
      {
        path: 'maintenance',
        component: MaintenanceListComponent
      },
      {
        path: 'asignationMachinery',
        component: AsignationMachineryListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConstructionMachineryRoutingModule { }
