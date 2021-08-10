import { Component, OnInit } from '@angular/core';
import { IncidentCatalogService } from '../services/incident-catalog.service';
import { IncidentCatalog } from '../shared/incidentCatalog';

@Component({
  selector: 'code-catalog-incident-list',
  templateUrl: './catalog-incident-list.component.html',
  styleUrls: ['./catalog-incident-list.component.scss']
})
export class CatalogIncidentListComponent implements OnInit {

  incidCatalogList: IncidentCatalog[];

  displayedColumns = ['label', 'name', 'details'];
  dataSource:IncidentCatalog[]= [];

  constructor(
    private incidentcatalogservice: IncidentCatalogService
  ) { }

  ngOnInit() {
    this.incidentcatalogservice.getIncidentCatalogList()
    .subscribe(incidCatalogList => {
      this.incidCatalogList = incidCatalogList
  });
  }

}
