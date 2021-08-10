import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogsComponent } from './catalogs.component';
import { CatalogIncidentListComponent } from '../catalog-incident-list/catalog-incident-list.component';
import { CatalogAfflictionListComponent } from '../catalog-affliction-list/catalog-affliction-list.component';
import { MachineryCatalogListComponent } from '../machinery-catalog-list/machinery-catalog-list.component';
import { CatalogFIComponent } from '../catalog-fi/catalog-fi.component';
import { CatalogNIComponent } from '../catalog-ni/catalog-ni.component';
import { CatalogTDComponent } from '../catalog-td/catalog-td.component';
import { CatalogUAComponent } from '../catalog-ua/catalog-ua.component';
import { CatalogUCComponent } from '../catalog-uc/catalog-uc.component';

const routes: Routes = [
  {
    path: 'catalogs',
    component: CatalogsComponent,
    children:[
      {
        path: 'incidentCatalog',
        component: CatalogIncidentListComponent
      },
      {
        path: 'afflictionCatalog',
        component: CatalogAfflictionListComponent
      },
      {
        path: 'machineryCatalog',
        component: MachineryCatalogListComponent
      },
      {
        path: 'CatalogFI',
        component: CatalogFIComponent
      },
      {
        path: 'CatalogNI',
        component: CatalogNIComponent
      },
      {
        path: 'CatalogTD',
        component: CatalogTDComponent
      },
      {
        path: 'CatalogUA',
        component: CatalogUAComponent
      },
      {
        path: 'CatalogUC',
        component: CatalogUCComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogsRoutingModule { }
