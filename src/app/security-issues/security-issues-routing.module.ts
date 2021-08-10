import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityIssuesComponent } from './security-issues.component';
import { AfflictionListComponent } from '../affliction-list/affliction-list.component';
import { IncidentListComponent } from '../incident-list/incident-list.component';
import { AccidentRegistryComponent } from '../accident-registry/accident-registry.component';


const routes: Routes = [
  {
    path: 'security-issues',
    component: SecurityIssuesComponent,
    children: [
      {
        path: 'incident',
        component: IncidentListComponent
      },
      {
        path: 'affliction',
        component: AfflictionListComponent
      },
      {
        path: 'accident',
        component: AccidentRegistryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityIssuesRoutingModule { }
