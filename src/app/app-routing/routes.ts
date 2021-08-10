import {Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {CatalogComponent} from '../catalog/catalog.component';
import {ContactComponent} from '../contact/contact.component';
import {AboutComponent} from '../about/about.component';
import {ItemDetailComponent} from '../item-detail/item-detail.component';
import {AfflictionListComponent} from '../affliction-list/affliction-list.component';
import {AfflictionDetailComponent} from '../affliction-detail/affliction-detail.component';
import {CatalogAfflictionListComponent} from '../catalog-affliction-list/catalog-affliction-list.component';
import {CatalogAfflictionDetailComponent} from '../catalog-affliction-detail/catalog-affliction-detail.component';
import {CatalogIncidentListComponent} from '../catalog-incident-list/catalog-incident-list.component';
import {CatalogIncidentDetailComponent} from '../catalog-incident-detail/catalog-incident-detail.component';
import {IncidentListComponent} from '../incident-list/incident-list.component';
import {IncidentDetailComponent} from '../incident-detail/incident-detail.component';
import {AfflictionNewComponent} from '../affliction-new/affliction-new.component';
import {ProjectListComponent} from '../project-list/project-list.component';
import {ProjectDetailComponent} from '../project-detail/project-detail.component';
import {ProjectAsignationListComponent} from '../project-asignation-list/project-asignation-list.component';
import {CatalogAfflictionNewComponent} from '../catalog-affliction-new/catalog-affliction-new.component';
import {CatalogIncidentNewComponent} from '../catalog-incident-new/catalog-incident-new.component';
import {IncidentNewComponent} from '../incident-new/incident-new.component';
import {ProjectNewComponent} from '../project-new/project-new.component';
import {ProjectAsignationNewComponent} from '../project-asignation-new/project-asignation-new.component';
import {CatalogAfflictionEditComponent} from '../catalog-affliction-edit/catalog-affliction-edit.component';
import {AfflictionEditComponent} from '../affliction-edit/affliction-edit.component';
import {IncidentEditComponent} from '../incident-edit/incident-edit.component';
import {CatalogIncidentEditComponent} from '../catalog-incident-edit/catalog-incident-edit.component';
import {ProjectEditComponent} from '../project-edit/project-edit.component';
import {ProjectAsignationEditComponent} from '../project-asignation-edit/project-asignation-edit.component';
import {PositionComponent} from '../position/position.component';
import {PositionAddComponent} from '../position-add/position-add.component';
import {FunctionManualComponent} from '../function-manual/function-manual.component';
import {FunctionManualDetailComponent} from '../function-manual-detail/function-manual-detail.component';
import {FunctionManualAddComponent} from '../function-manual-add/function-manual-add.component';
import {FunctionManualEditComponent} from '../function-manual-edit/function-manual-edit.component';
import {PositionEditComponent} from '../position-edit/position-edit.component';
import {PositionDetailComponent} from '../position-detail/position-detail.component';
import {MaintenanceListComponent} from '../maintenance-list/maintenance-list.component';
import {MaintenanceNewComponent} from '../maintenance-new/maintenance-new.component';
import {MaintenanceDetailComponent} from '../maintenance-detail/maintenance-detail.component';
import {MaintenanceEditComponent} from '../maintenance-edit/maintenance-edit.component';
import {MachineryDetailComponent} from '../machinery-detail/machinery-detail.component';
import {MachineryListComponent} from '../machinery-list/machinery-list.component';
import {MachineryEditComponent} from '../machinery-edit/machinery-edit.component';
import {MachineryNewComponent} from '../machinery-new/machinery-new.component';
import {AsignationMachineryListComponent} from '../asignation-machinery-list/asignation-machinery-list.component';
import {AsignationMachineryDetailComponent} from '../asignation-machinery-detail/asignation-machinery-detail.component';
import {AsignationMachineryEditComponent} from '../asignation-machinery-edit/asignation-machinery-edit.component';
import {AsignationMachineryNewComponent} from '../asignation-machinery-new/asignation-machinery-new.component';
import {MachineryCatalogListComponent} from '../machinery-catalog-list/machinery-catalog-list.component';
import {MachineryCatalogListDetailComponent} from '../machinery-catalog-list-detail/machinery-catalog-list-detail.component';
import {MachineryCatalogEditComponent} from '../machinery-catalog-edit/machinery-catalog-edit.component';
import {MachineryCatalogNewComponent} from '../machinery-catalog-new/machinery-catalog-new.component';

import {CatalogNIComponent} from '../catalog-ni/catalog-ni.component';

import {CatalogFIComponent} from '../catalog-fi/catalog-fi.component';
import {CatalogTDComponent} from '../catalog-td/catalog-td.component';
import {CatalogUAComponent} from '../catalog-ua/catalog-ua.component';
import {CatalogUCComponent} from '../catalog-uc/catalog-uc.component';
import {AccidentComponent} from '../accident/accident.component';
import {AccidentRegistryComponent} from '../accident-registry/accident-registry.component';
import {CatalogFiDetailComponent} from '../catalog-fi-detail/catalog-fi-detail.component';
import {CatalogNiDetailComponent} from '../catalog-ni-detail/catalog-ni-detail.component';
import {CatalogTdDetailComponent} from '../catalog-td-detail/catalog-td-detail.component';
import {CatalogUaDetailComponent} from '../catalog-ua-detail/catalog-ua-detail.component';
import {CatalogUcDetailComponent} from '../catalog-uc-detail/catalog-uc-detail.component';
import {AccidentRegistryDetailComponent} from '../accident-registry-detail/accident-registry-detail.component';
import {CatalogFiNewComponent} from '../catalog-fi-new/catalog-fi-new.component';
import {CatalogNiNewComponent} from '../catalog-ni-new/catalog-ni-new.component';
import {CatalogTdNewComponent} from '../catalog-td-new/catalog-td-new.component';
import {CatalogUcNewComponent} from '../catalog-uc-new/catalog-uc-new.component';
import {CatalogUaNewComponent} from '../catalog-ua-new/catalog-ua-new.component';
import {CatalogFiEditComponent} from '../catalog-fi-edit/catalog-fi-edit.component';
import {CatalogNiEditComponent} from '../catalog-ni-edit/catalog-ni-edit.component';
import {CatalogUaEditComponent} from '../catalog-ua-edit/catalog-ua-edit.component';
import {CatalogTdEditComponent} from '../catalog-td-edit/catalog-td-edit.component';
import {CatalogUcEditComponent} from '../catalog-uc-edit/catalog-uc-edit.component';
import {AccidentRegistryNewComponent} from '../accident-registry-new/accident-registry-new.component';
import {AccidentNewComponent} from '../accident-new/accident-new.component';
import {CategoryComponent} from '../catalog/category/category.component';
import {SubcategoryComponent} from '../catalog/subcategory/subcategory.component';
import {ItemListComponent} from '../catalog/item-list/item-list.component';
import {AsignationItemComponent} from '../catalog/asignation-item/asignation-item.component';
import {ItemUpdateComponent} from '../catalog/item-list/item-update/item-update.component';
//import {CatalogNIComponent} from '../catalog-ni/catalog-ni.component';
import {OcupationalSafetyListComponent} from '../ocupational-safety-list/ocupational-safety-list.component';
import {OcupationalNewComponent} from '../ocupational-new/ocupational-new.component';
import {OcupationalEditComponent} from '../ocupational-edit/ocupational-edit.component';
import {OcupationalCommitedListComponent} from '../ocupational-commited-list/ocupational-commited-list.component';
import {CommitedOcupationalNewComponent} from '../commited-ocupational-new/commited-ocupational-new.component';
import {OcupationaCommitteeEditComponent} from '../ocupationa-committee-edit/ocupationa-committee-edit.component'

import {PositionManualComponent} from '../position-manual/position-manual.component';
import {ContractComponent} from '../contract/contract.component';
import {ContractDetailComponent} from '../contract-detail/contract-detail.component';
import {ContractAddComponent} from '../contract-add/contract-add.component';
import {ContractEditComponent} from '../contract-edit/contract-edit.component';
import {AccidentRepAnioComponent} from '../accident-rep-anio/accident-rep-anio.component';
import {ItemImageComponent} from '../catalog/item-list/item-image/item-image.component';
import {AsignationItemUpdateComponent} from '../catalog/asignation-item/asignation-item-update/asignation-item-update.component';
import {SubcategoryUpdateComponent} from '../catalog/subcategory/subcategory-update/subcategory-update.component';
import {CategoryUpdateComponent} from '../catalog/category/category-update/category-update.component';
import { MachineryReportsYearComponent } from '../machinery-reports-year/machinery-reports-year.component';
import { MachineryReportsComponent } from '../machinery-reports/machinery-reports.component';
import { LoginComponent } from '../login/login.component';
import { AuditoryHistoryComponent } from '../auditory-history/auditory-history.component';
import { ReporteComponent } from '../reporte/reporte.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HumanResourcesComponent } from '../human-resources/human-resources.component';
import { SecurityIssuesComponent } from '../security-issues/security-issues.component';
import { CatalogsComponent } from '../catalogs/catalogs.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ConstructionMachineryComponent } from '../construction-machinery/construction-machinery.component';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  // {path: 'home', component: HomeComponent},
  {path: 'home', component: DashboardComponent},
  {path: 'human-resources', component: HumanResourcesComponent},
  {path: 'security-issues', component: SecurityIssuesComponent},
  {path: 'catalogs', component: CatalogsComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'itemdetail/:id', component: ItemDetailComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'employee', loadChildren: '../employee/employee.module#EmployeeModule', pathMatch: 'prefix'},
  //{path: 'incident', loadChildren: '../incident/incident.module#IncidentModule', pathMatch: 'prefix'},
  {path: 'construction-machinery', component: ConstructionMachineryComponent},
  // routes affliction
  {path: 'affliction', component: AfflictionListComponent},
  {path: 'affliction/view/:id', component: AfflictionDetailComponent},
  {path: 'affliction/create', component: AfflictionNewComponent},
  {path: 'affliction/edit/:id', component: AfflictionEditComponent},

  // routes affliction catalog
  {path: 'afflictionCatalog', component: CatalogAfflictionListComponent},
  {path: 'afflictionCatalog/view/:id', component: CatalogAfflictionDetailComponent},
  {path: 'afflictionCatalog/create', component: CatalogAfflictionNewComponent},
  {path: 'afflictionCatalog/edit/:id', component: CatalogAfflictionEditComponent},

  // routes incident
  {path: 'incident', component: IncidentListComponent},
  {path: 'incident/view/:id', component: IncidentDetailComponent},
  {path: 'incident/create', component: IncidentNewComponent},
  {path: 'incident/edit/:id', component: IncidentEditComponent},

  // routes project
  {path: 'project', component: ProjectListComponent},
  {path: 'project/view/:id', component: ProjectDetailComponent},
  {path: 'project/create', component: ProjectNewComponent},
  {path: 'project/edit/:id', component: ProjectEditComponent},

  // routes project asignation
  {path: 'asignationProject', component: ProjectAsignationListComponent},
  {path: 'asignationProject/create', component: ProjectAsignationNewComponent},
  {path: 'asignationProject/edit/:id', component: ProjectAsignationEditComponent},

  // routes incident catalog
  {path: 'incidentCatalog', component: CatalogIncidentListComponent},
  {path: 'incidentCatalog/view/:id', component: CatalogIncidentDetailComponent},
  {path: 'incidentCatalog/create', component: CatalogIncidentNewComponent},
  {path: 'incidentCatalog/edit/:id', component: CatalogIncidentEditComponent},

  // route auditory history and report
  {path: 'auditoryHistory', component: AuditoryHistoryComponent},
  {path: 'reportes', component: ReporteComponent},

  //routes position a function manuals
  {path: 'positions', component: PositionComponent},
  {path: 'positionDetail/:id', component: PositionDetailComponent},
  {path: 'positionNew', component: PositionAddComponent},
  {path: 'positionUpdate/:id', component: PositionEditComponent},
  {path: 'functionManuals', component: FunctionManualComponent},
  {path: 'functionManualDetail/:id', component: FunctionManualDetailComponent},
  {path: 'functionManualNew', component: FunctionManualAddComponent},



  {path: 'functionManualUpdate/:id', component: FunctionManualEditComponent},

  // routes machineryCatalog
  {path: 'machineryCatalog', component: MachineryCatalogListComponent},
  {path: 'machineryCatalog/view/:id', component: MachineryCatalogListDetailComponent},
  {path: 'machineryCatalog/create', component: MachineryCatalogNewComponent},
  {path: 'machineryCatalog/edit/:id', component: MachineryCatalogEditComponent},

  // routes maintenance
  {path: 'maintenance', component: MaintenanceListComponent},
  {path: 'maintenance/view/:id', component: MaintenanceDetailComponent},
  {path: 'maintenance/create', component: MaintenanceNewComponent},
  {path: 'maintenance/edit/:id', component: MaintenanceEditComponent},
  // routes machinery
  {path: 'machinery', component: MachineryListComponent},
  {path: 'machinery/view/:id', component: MachineryDetailComponent},
  {path: 'machinery/create', component: MachineryNewComponent},
  {path: 'machinery/edit/:id', component: MachineryEditComponent},
  // routes asignationmachinery
  {path: 'machinery/an/:id', component: MachineryReportsYearComponent},
  {path: 'machinery/ms/:id', component: MachineryReportsComponent},

  {path: 'asignationMachinery', component: AsignationMachineryListComponent},
  {path: 'asignationMachinery/view/:id', component: AsignationMachineryDetailComponent},
  {path: 'asignationMachinery/create', component: AsignationMachineryNewComponent},
  {path: 'asignationMachinery/edit/:id', component: AsignationMachineryEditComponent},
  {path: 'catalogFI', component: CatalogFIComponent},
  {path: 'catalogNI', component: CatalogNIComponent},
  {path: 'catalogTD', component: CatalogTDComponent},
  {path: 'catalogUC', component: CatalogUCComponent},
  {path: 'catalogUA', component: CatalogUAComponent},
  {path: 'accident', component: AccidentComponent},
  {path: 'accidentRegistry', component: AccidentRegistryComponent},
  {path: 'catalogFiDetail/view/:id', component: CatalogFiDetailComponent},
  {path: 'catalogNiDetail/view/:id', component: CatalogNiDetailComponent},
  {path: 'catalogTdDetail/view/:id', component: CatalogTdDetailComponent},
  {path: 'catalogUaDetail/view/:id', component: CatalogUaDetailComponent},
  {path: 'catalogUcDetail/view/:id', component: CatalogUcDetailComponent},
  {path: 'accidentRDetail/view/:id', component: AccidentRegistryDetailComponent},
  {path: 'catalogFI/create', component: CatalogFiNewComponent},
  {path: 'catalogNI/create', component: CatalogNiNewComponent},
  {path: 'catalogTD/create', component: CatalogTdNewComponent},
  {path: 'catalogUC/create', component: CatalogUcNewComponent},
  {path: 'catalogUA/create', component: CatalogUaNewComponent},
  {path: 'accident/create', component: AccidentNewComponent},
  {path: 'accidentRegistry/create', component: AccidentRegistryNewComponent},
  {path: 'catalogFI/update/:id', component: CatalogFiEditComponent},
  {path: 'catalogNI/update/:id', component: CatalogNiEditComponent},
  {path: 'catalogUA/update/:id', component: CatalogUaEditComponent},
  {path: 'catalogTD/update/:id', component: CatalogTdEditComponent},
  {path: 'catalogUC/update/:id', component: CatalogUcEditComponent},
  {path: 'accidentRegistry', component: AccidentRegistryComponent},
  {path: 'catalogFiDetail/view/:id', component: CatalogFiDetailComponent},
  {path: 'catalogNiDetail/view/:id', component: CatalogNiDetailComponent},
  {path: 'catalogTdDetail/view/:id', component: CatalogTdDetailComponent},
  {path: 'catalogUaDetail/view/:id', component: CatalogUaDetailComponent},
  {path: 'catalogUcDetail/view/:id', component: CatalogUcDetailComponent},
  {path: 'accidentRDetail/view/:id', component: AccidentRegistryDetailComponent},
  {path: 'catalogFI/create', component: CatalogFiNewComponent},
  {path: 'catalogNI/create', component: CatalogNiNewComponent},
  {path: 'catalogTD/create', component: CatalogTdNewComponent},
  {path: 'catalogUC/create', component: CatalogUcNewComponent},
  {path: 'catalogUA/create', component: CatalogUaNewComponent},
  {path: 'accident/create', component: AccidentNewComponent},
  {path: 'accidentRegistry/create/:id', component: AccidentRegistryNewComponent},
  {path: 'catalogFI/update/:id', component: CatalogFiEditComponent},
  {path: 'catalogNI/update/:id', component: CatalogNiEditComponent},
  {path: 'catalogUA/update/:id', component: CatalogUaEditComponent},
  {path: 'catalogTD/update/:id', component: CatalogTdEditComponent},
  {path: 'catalogUC/update/:id', component: CatalogUcEditComponent},
  {path: 'accidentRegistry/an/:id', component: AccidentRepAnioComponent},
  {path: 'itemdetail/:id', component: ItemDetailComponent},

  {path: 'ocupationalSafety', component: OcupationalSafetyListComponent},
  {path: 'ocupationalSafety/create', component: OcupationalNewComponent},
  {path: 'ocupationalsafety/edit/:id', component: OcupationalEditComponent},
  {path: 'commitedOcupational', component: OcupationalCommitedListComponent},
  {path: 'commitedOcupational/create', component: CommitedOcupationalNewComponent},
  {path: 'committeOcupational/edit/:id', component: OcupationaCommitteeEditComponent},

{path: 'category', component: CategoryComponent},
  {path: 'subcategory', component: SubcategoryComponent},
  {path: 'itemlist', component: ItemListComponent},
  {path: 'itemasiglist', component: AsignationItemComponent},
  {path: 'itemlist/updated/:id', component: ItemUpdateComponent},
  {path: 'category/updated/:id', component: CategoryUpdateComponent},
  {path: 'subcategory/updated/:id', component: SubcategoryUpdateComponent},
  {path: 'itemasig/updated/:id', component: AsignationItemUpdateComponent},
  {path: 'itemlist/updatedImage/:id', component: ItemImageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'positionFunction', component: PositionManualComponent},
  {path: 'contracts', component: ContractComponent},
  {path: 'contractDetail/:id',component: ContractDetailComponent},
  {path: 'contractNew', component: ContractAddComponent},
  {path: 'contractUpdate/:id', component: ContractEditComponent}

];
