import { Component, OnInit } from '@angular/core';
import { Incident } from '../shared/incident';
import { IncidentService } from '../services/incident.service';

@Component({
  selector: 'code-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.scss']
})
export class IncidentListComponent implements OnInit {

  incidentList: Incident[];

  displayedColumns = ['label', 'catalog', 'employee','date' ,'view'];
  dataSource:Incident[]= [];
  constructor(
    private incidentservice: IncidentService
  ) { }

  ngOnInit() {

    this.incidentservice.getIncidentList()
      .subscribe(incidentList => {
        this.incidentList = incidentList
       // console.log('affliction list: ', this.afflictionList);
    });
  }

}
