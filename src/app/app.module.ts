import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

import {CatalogComponent} from './catalog/catalog.component';
import {ItemDetailComponent} from './item-detail/item-detail.component';
import {ItemService} from './services/item.service';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {EmployeeService} from './services/employee.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {baseURL} from './shared/baseurl';
import {EmployeeModule} from './employee/employee.module';
import {SharedModule} from './shared/shared.module';
import {AfflictionListComponent} from './affliction-list/affliction-list.component';
import {AfflictionService} from './services/affliction.service';
import {AfflictionDetailComponent} from './affliction-detail/affliction-detail.component';
import {CatalogAfflictionListComponent} from './catalog-affliction-list/catalog-affliction-list.component';
import {CatalogAfflictionDetailComponent} from './catalog-affliction-detail/catalog-affliction-detail.component';
import {CatalogIncidentListComponent} from './catalog-incident-list/catalog-incident-list.component';
import {CatalogIncidentDetailComponent} from './catalog-incident-detail/catalog-incident-detail.component';
import {IncidentListComponent} from './incident-list/incident-list.component';
import {IncidentDetailComponent} from './incident-detail/incident-detail.component';
import {AfflictionNewComponent} from './affliction-new/affliction-new.component';
import {IncidentService} from './services/incident.service';
import {AffictionCatalogService} from './services/affiction-catalog.service';
import {IncidentCatalogService} from './services/incident-catalog.service';
import {ProjectService} from './services/project.service';
import {ProjectListComponent} from './project-list/project-list.component';
import {ProjectDetailComponent} from './project-detail/project-detail.component';
import {ProjectAsignationListComponent} from './project-asignation-list/project-asignation-list.component';
import {ProjectAsignationService} from './services/project-asignation.service';
import {CatalogAfflictionNewComponent} from './catalog-affliction-new/catalog-affliction-new.component';
import {CatalogIncidentNewComponent} from './catalog-incident-new/catalog-incident-new.component';
import {IncidentNewComponent} from './incident-new/incident-new.component';
import {ProjectNewComponent} from './project-new/project-new.component';
import {ProjectAsignationNewComponent} from './project-asignation-new/project-asignation-new.component';
import {CatalogAfflictionEditComponent} from './catalog-affliction-edit/catalog-affliction-edit.component';
import {AfflictionEditComponent} from './affliction-edit/affliction-edit.component';
import {IncidentEditComponent} from './incident-edit/incident-edit.component';
import {CatalogIncidentEditComponent} from './catalog-incident-edit/catalog-incident-edit.component';
import {ProjectEditComponent} from './project-edit/project-edit.component';
import {ProjectAsignationEditComponent} from './project-asignation-edit/project-asignation-edit.component';
import {PositionComponent} from './position/position.component';
import {PositionEditComponent} from './position-edit/position-edit.component';
import {FunctionManualEditComponent} from './function-manual-edit/function-manual-edit.component';
import {FunctionManualAddComponent} from './function-manual-add/function-manual-add.component';
import {FunctionManualDetailComponent} from './function-manual-detail/function-manual-detail.component';
import {FunctionManualComponent} from './function-manual/function-manual.component';
import {PositionDetailComponent} from './position-detail/position-detail.component';
import {PositionAddComponent} from './position-add/position-add.component';
import {PositionService} from './services/position.service';
import {FunctionManualService} from './services/function-manual.service';
import {CatalogFIService} from './services/catalog-fi.service';
import {CatalogNIService} from './services/catalog-ni.service';
import {CatalogUAService} from './services/catalog-ua.service';
import {CatalogUCService} from './services/catalog-uc.service';
import {AccidentService} from './services/accident.service';
import {CatalogTDService} from './services/catalog-td.service';
import {CatalogTDComponent} from './catalog-td/catalog-td.component';
import {AccidentRegistryService} from './services/accident-registry.service';
import {AccidentRegistryComponent} from './accident-registry/accident-registry.component';
import {CatalogFiDetailComponent} from './catalog-fi-detail/catalog-fi-detail.component';
import {CatalogNiDetailComponent} from './catalog-ni-detail/catalog-ni-detail.component';
import {CatalogTdDetailComponent} from './catalog-td-detail/catalog-td-detail.component';
import {CatalogUcDetailComponent} from './catalog-uc-detail/catalog-uc-detail.component';
import {CatalogUaDetailComponent} from './catalog-ua-detail/catalog-ua-detail.component';
import {AccidentRegistryDetailComponent} from './accident-registry-detail/accident-registry-detail.component';
import {CatalogFiNewComponent} from './catalog-fi-new/catalog-fi-new.component';
import {CatalogNiNewComponent} from './catalog-ni-new/catalog-ni-new.component';
import {CatalogTdNewComponent} from './catalog-td-new/catalog-td-new.component';
import {CatalogUaNewComponent} from './catalog-ua-new/catalog-ua-new.component';
import {CatalogUcNewComponent} from './catalog-uc-new/catalog-uc-new.component';
import {CatalogFiEditComponent} from './catalog-fi-edit/catalog-fi-edit.component';
import {CatalogNiEditComponent} from './catalog-ni-edit/catalog-ni-edit.component';
import {CatalogUaEditComponent} from './catalog-ua-edit/catalog-ua-edit.component';
import {CatalogTdEditComponent} from './catalog-td-edit/catalog-td-edit.component';
import {CatalogUcEditComponent} from './catalog-uc-edit/catalog-uc-edit.component';
import {AccidentRegistryNewComponent} from './accident-registry-new/accident-registry-new.component';
import {AccidentNewComponent} from './accident-new/accident-new.component';
import {AccidentEditComponent} from './accident-edit/accident-edit.component';
import {AccidentRegistryEditComponent} from './accident-registry-edit/accident-registry-edit.component';

import {MachineryCatalogListComponent} from './machinery-catalog-list/machinery-catalog-list.component';
import {MachineryCatalogListDetailComponent} from './machinery-catalog-list-detail/machinery-catalog-list-detail.component';
import {MaintenanceListComponent} from './maintenance-list/maintenance-list.component';
import {MaintenanceDetailComponent} from './maintenance-detail/maintenance-detail.component';
import {MachineryNewComponent} from './machinery-new/machinery-new.component';
import {MachineryEditComponent} from './machinery-edit/machinery-edit.component';
import {MachineryDetailComponent} from './machinery-detail/machinery-detail.component';
import {MachineryListComponent} from './machinery-list/machinery-list.component';
import {MaintenanceEditComponent} from './maintenance-edit/maintenance-edit.component';
import {MaintenanceNewComponent} from './maintenance-new/maintenance-new.component';
import {MachineryCatalogNewComponent} from './machinery-catalog-new/machinery-catalog-new.component';
import {MachineryCatalogEditComponent} from './machinery-catalog-edit/machinery-catalog-edit.component';
import {AsignationMachineryListComponent} from './asignation-machinery-list/asignation-machinery-list.component';
import {AsignationMachineryDetailComponent} from './asignation-machinery-detail/asignation-machinery-detail.component';
import {AsignationMachineryEditComponent} from './asignation-machinery-edit/asignation-machinery-edit.component';
import {AsignationMachineryNewComponent} from './asignation-machinery-new/asignation-machinery-new.component';
import {MaintenanceService} from './services/maintenance.service';
import {MachineryCatalogService} from './services/machinery-catalog.service';
import {AsignationMachineryService} from './services/asignation-machinery.service';
import {MachineryService} from './services/machinery.service';
import {CatalogNIComponent} from './catalog-ni/catalog-ni.component';
import {CatalogFIComponent} from './catalog-fi/catalog-fi.component';
import {CatalogUCComponent} from './catalog-uc/catalog-uc.component';
import {CatalogUAComponent} from './catalog-ua/catalog-ua.component';
import {ItemListComponent} from './catalog/item-list/item-list.component';
import {CategoryComponent} from './catalog/category/category.component';
import {SubcategoryComponent} from './catalog/subcategory/subcategory.component';
import {AsignationItemComponent} from './catalog/asignation-item/asignation-item.component';
import {AsignationItemAddComponent} from './catalog/asignation-item/asignation-item-add/asignation-item-add.component';
import {CategoryAddComponent} from './catalog/category/category-add/category-add.component';
import {ItemAddComponent} from './catalog/item-list/item-add/item-add.component';
import {SubcategoryAddComponent} from './catalog/subcategory/subcategory-add/subcategory-add.component';
import {CategoryService} from './services/category.service';
import {SubcategoryService} from './services/subcategory.service';
import {AsignationItemService} from './services/asignation-item.service';
import {ItemUpdateComponent} from './catalog/item-list/item-update/item-update.component';
import {AccidentComponent} from './accident/accident.component';
import {OcupationalSafetyListComponent} from './ocupational-safety-list/ocupational-safety-list.component';
import {OcupationalNewComponent} from './ocupational-new/ocupational-new.component';
import {OcupationalEditComponent} from './ocupational-edit/ocupational-edit.component';
import {OcupationalCommitedListComponent} from './ocupational-commited-list/ocupational-commited-list.component';
import {CommitedOcupationalNewComponent} from './commited-ocupational-new/commited-ocupational-new.component';
import {OcupationaCommitteeEditComponent} from './ocupationa-committee-edit/ocupationa-committee-edit.component';

import {PositionManualComponent} from './position-manual/position-manual.component';
import {ContractComponent} from './contract/contract.component';
import {ContractService} from './services/contract.service';
import {ContractDetailComponent} from './contract-detail/contract-detail.component';
import {ContractAddComponent} from './contract-add/contract-add.component';
import {ContractEditComponent} from './contract-edit/contract-edit.component';
import {AccidentRepAnioComponent} from './accident-rep-anio/accident-rep-anio.component';
import {CategoryUpdateComponent} from './catalog/category/category-update/category-update.component';
import {ItemImageComponent} from './catalog/item-list/item-image/item-image.component';
import {AsignationItemUpdateComponent} from './catalog/asignation-item/asignation-item-update/asignation-item-update.component';
import {SubcategoryUpdateComponent} from './catalog/subcategory/subcategory-update/subcategory-update.component';
import {ImageItemService} from './services/image-item.service';

import { MachineryReportsComponent } from './machinery-reports/machinery-reports.component';
import { MachineryReportsYearComponent } from './machinery-reports-year/machinery-reports-year.component';
import { OcupationalSafetyService } from './services/ocupationalsafety.service';
import { LoginModule } from './login/login.module';
import { AuditoryHistoryComponent } from './auditory-history/auditory-history.component';
import { AuditoryHistoryService } from './services/auditory-history.service';
import { ReporteComponent } from './reporte/reporte.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { HumanResourcesModule } from './human-resources/human-resources.module';
import { SecurityIssuesModule } from './security-issues/security-issues.module';
import { CatalogsModule } from './catalogs/catalogs.module';
import { ProjectsModule } from './projects/projects.module';
import { ConstructionMachineryModule } from './construction-machinery/construction-machinery.module';
import {SecurityItemsModule} from './security-items/security-items.module';


@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    ItemDetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    AfflictionListComponent,
    AfflictionDetailComponent,
    CatalogAfflictionListComponent,
    CatalogAfflictionDetailComponent,
    CatalogIncidentListComponent,
    CatalogIncidentDetailComponent,
    IncidentListComponent,
    IncidentDetailComponent,
    AfflictionNewComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    ProjectAsignationListComponent,
    CatalogAfflictionNewComponent,
    CatalogIncidentNewComponent,
    IncidentNewComponent,
    ProjectNewComponent,
    ProjectAsignationNewComponent,
    CatalogAfflictionEditComponent,
    AfflictionEditComponent,
    IncidentEditComponent,
    CatalogIncidentEditComponent,
    ProjectEditComponent,
    ProjectAsignationEditComponent,
    PositionComponent,
    PositionAddComponent,
    PositionDetailComponent,
    PositionEditComponent,
    FunctionManualComponent,
    FunctionManualDetailComponent,
    FunctionManualAddComponent,
    FunctionManualEditComponent,
    MachineryCatalogListComponent,
    MachineryCatalogListDetailComponent,
    MaintenanceListComponent,
    MaintenanceDetailComponent,
    MachineryListComponent,
    MachineryDetailComponent,
    MachineryNewComponent,
    MachineryEditComponent,
    MachineryCatalogEditComponent,
    MachineryCatalogNewComponent,
    MaintenanceNewComponent,
    MaintenanceEditComponent,
    AsignationMachineryListComponent,
    AsignationMachineryEditComponent,
    AsignationMachineryNewComponent,
    AsignationMachineryDetailComponent,
    CatalogNIComponent,
    CatalogFIComponent,
    CatalogUCComponent,
    CatalogUAComponent,
    CatalogTDComponent,
    AccidentComponent,
    AccidentRegistryComponent,
    CatalogFiDetailComponent,
    CatalogNiDetailComponent,
    CatalogTdDetailComponent,
    CatalogUcDetailComponent,
    CatalogUaDetailComponent,
    AccidentRegistryDetailComponent,
    CatalogFiNewComponent,
    CatalogNiNewComponent,
    CatalogTdNewComponent,
    CatalogUaNewComponent,
    CatalogUcNewComponent,
    CatalogFiEditComponent,
    CatalogNiEditComponent,
    CatalogUaEditComponent,
    CatalogTdEditComponent,
    CatalogUcEditComponent,
    AccidentRegistryNewComponent,
    AccidentNewComponent,
    AccidentEditComponent,
    AccidentRegistryEditComponent,
   // OcupationalSafetyListComponent,
   // OcupationalSafetyAsignationService,
   // OcupationalSafetyEditComponent,
    ItemListComponent,
    CategoryComponent,
    SubcategoryComponent,
    AsignationItemComponent,
    AsignationItemAddComponent,
    CategoryAddComponent,
    ItemAddComponent,
    SubcategoryAddComponent,
    ItemUpdateComponent,
    OcupationalSafetyListComponent,
    OcupationalNewComponent,
    OcupationalEditComponent,
    OcupationalCommitedListComponent,
    CommitedOcupationalNewComponent,
    OcupationaCommitteeEditComponent,
    CategoryUpdateComponent,
    SubcategoryUpdateComponent,
    AsignationItemUpdateComponent,
    ItemImageComponent,
    PositionManualComponent,
    ContractComponent,
    ContractDetailComponent,
    ContractAddComponent,
    ContractEditComponent,
    AccidentRepAnioComponent,
    MachineryReportsComponent,
    MachineryReportsYearComponent,
    AuditoryHistoryComponent,
    ReporteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
    MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
    MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule,
    MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule,
    MatTabsModule, MatToolbarModule, MatTooltipModule,
    BrowserAnimationsModule,
    FlexLayoutModule, AppRoutingModule,
    HttpClientModule,
    EmployeeModule,
    SharedModule,
    LoginModule,
    DashboardModule,
    HumanResourcesModule,
    SecurityIssuesModule,
    CatalogsModule,
    ProjectsModule,
    ConstructionMachineryModule,
    SecurityItemsModule
  ],
  providers: [
    ItemService,
    EmployeeService,
    AfflictionService,
    IncidentService,
    AffictionCatalogService,
    IncidentCatalogService,
    ProjectService,
    ProjectAsignationService,
    PositionService,
    FunctionManualService,
    MaintenanceService,
    MachineryCatalogService,
    AsignationMachineryService,
    MachineryService,
    CatalogFIService,
    CatalogNIService,
    CatalogUAService,
    CatalogUCService,
    CatalogTDService,
    AccidentService,
    AccidentRegistryService,
    CategoryService,
    SubcategoryService,
    AsignationItemService,
    OcupationalSafetyService,
    ImageItemService,
    ContractService,
    AuditoryHistoryService,
    {provide: 'BaseURL', useValue: baseURL}
  ],
  entryComponents: [
    ItemAddComponent,
    CategoryAddComponent,
    SubcategoryAddComponent,
    AsignationItemAddComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
