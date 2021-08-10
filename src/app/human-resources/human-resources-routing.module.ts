import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HumanResourcesComponent } from './human-resources.component';
import { ContractComponent } from '../contract/contract.component';
import { EmployeeListComponent } from '../employee/employee-list/employee-list.component';

const routes: Routes = [
  {
    path: 'human-resources',
    component: HumanResourcesComponent,
    children: [
      {
        path: 'employees',
        component: EmployeeListComponent
      },
      {
        path: 'contracts',
        component: ContractComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HumanResourcesRoutingModule { }
