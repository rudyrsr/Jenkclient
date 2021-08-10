import { Component, OnInit } from '@angular/core';
import { Maintenance } from '../shared/maintenance';
import { MaintenanceService } from '../services/maintenance.service';

@Component({
  selector: 'code-maintenance-list',
  templateUrl: './maintenance-list.component.html',
  styleUrls: ['./maintenance-list.component.scss']
})
export class MaintenanceListComponent implements OnInit {
  maintenaceList:Maintenance[];
  displayedColumns = ['label','Name','Description', 'view','edit'];
  dataSource:Maintenance[]= [];
  
  constructor(private maintenancservice:MaintenanceService) { 

  }

  ngOnInit() {
    this.maintenancservice.getMaintenanceList().subscribe(maintenaceList=>{
      this.maintenaceList=maintenaceList
      //console.log("maintenance", this.maintenaceList);
    });
  }

}
