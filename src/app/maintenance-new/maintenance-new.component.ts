import { Component, OnInit } from '@angular/core';
import { MaintenanceService } from '../services/maintenance.service';
import { MachineryService } from '../services/machinery.service';
import { Location } from '@angular/common';


@Component({
  selector: 'code-maintenance-new',
  templateUrl: './maintenance-new.component.html',
  styleUrls: ['./maintenance-new.component.scss']
})
export class MaintenanceNewComponent implements OnInit {
maintenance={
  maintenanceCode: "MAT" ,
  maintenanceDescription: "",
  maintenanceObservation: "",
  maintenancePrice: "",
  maintenanceTimeLineInitDate: "",
  machineryId: "",
}
machineryList=[];
  constructor(
    private maintenanceservice: MaintenanceService,
    private machineryservice: MachineryService,
    private location: Location

  ) { }

  ngOnInit() {
    this.machineryservice.getMachineryList().
      subscribe(
        machineryList => {
          this.machineryList = machineryList;
        }
      );
  }



  create() {
    this.maintenanceservice.createNewMaintenance(this.maintenance).
      subscribe(
        (response) => {
          alert("the maintenance has been created");
          this.location.back();

        }, (error) => {
          console.log('error: ', error);
        }
      )
    }   
  }