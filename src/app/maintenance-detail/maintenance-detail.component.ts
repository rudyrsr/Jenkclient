import { Component, OnInit } from '@angular/core';
import { Maintenance } from '../shared/maintenance';
import { MaintenanceService } from '../services/maintenance.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'code-maintenance-detail',
  templateUrl: './maintenance-detail.component.html',
  styleUrls: ['./maintenance-detail.component.scss']
})
export class MaintenanceDetailComponent implements OnInit {
  maintenancedetail:Maintenance
  maintenancedetailId:number;
  constructor(private maintenanceservice:MaintenanceService,
    private activateroute: ActivatedRoute,
private location: Location    ) { }

  ngOnInit() {
    this.activateroute.params
    .subscribe(
      (paramss) =>{
        this.maintenancedetailId = paramss.id;
        this.maintenanceservice.getMaintenanceById(this.maintenancedetailId)
        .subscribe( maintenancedetail=> this.maintenancedetail = maintenancedetail);
      }
    )
    }
    goBack(): void {
    this.location.back();
    }


    deleteTMaintenanceCatalog(maintenanceID: number, maintenanceCode: string, maintenanceName: string): void {
      let confirmar = confirm('Are you sure to delete a maintenace: '+maintenanceCode+' of '+ maintenanceName);
      if(confirmar)
      this.maintenanceservice.deleteMaintenance(maintenanceID).subscribe(
        (response) => {
          this.location.back();
        }, (error) => {
          console.log('error: ', error);
        }
      )}
  }