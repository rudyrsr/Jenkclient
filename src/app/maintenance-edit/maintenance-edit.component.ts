import { Component, OnInit } from '@angular/core';
import { Maintenance } from '../shared/maintenance';
import { MaintenanceService } from '../services/maintenance.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MachineryService } from '../services/machinery.service';
import {Location, DatePipe} from '@angular/common';


@Component({
  selector: 'code-maintenance-edit',
  templateUrl: './maintenance-edit.component.html',
  styleUrls: ['./maintenance-edit.component.scss']
})
export class MaintenanceEditComponent implements OnInit {
  maintenanceId:number;
  /* maintenance={
    id: 0,
    maintenanceCode:"",
    maintenanceObservation:"",
    maintenanceDescription:"",
    maintenanceTimeLineInitDate:"",
    maintenancePrice:"",
    machineryId: 0
  }; */
  maintenance:Maintenance;
  maintenanceTimeLineInitDate:Date;
  machineryList=[];

  constructor(private maintenanceservice: MaintenanceService,
    private activateroute: ActivatedRoute,
    private location: Location,
    private datePipe:DatePipe,
    private machineryservice: MachineryService) { }

  ngOnInit() {
    this.activateroute.params
    .subscribe(
      (paramss) =>{
        this.maintenanceId = paramss.id;
        this.maintenanceservice.getMaintenanceById(this.maintenanceId)
        .subscribe(maintenance => {
          this.maintenance=maintenance;
          this.maintenanceTimeLineInitDate = new Date(this.maintenance.maintenanceTimeLineInitDate);
          /* this.maintenance.id= maintenance.id;
          this.maintenance.maintenanceCode= maintenance.maintenanceCode;
          this.maintenance.maintenanceObservation= maintenance.maintenanceObservation;
          this.maintenance.maintenanceDescription= maintenance.maintenanceDescription;
          this.maintenance.maintenanceTimeLineInitDate= this.reformatDate(maintenance.maintenanceTimeLineInitDate);
          this.maintenance.maintenancePrice=maintenance.maintenancePrice;
          this.maintenance.machineryId = maintenance.machineryCMD.id; */
         // console.log('>>>>>> : ', maintenance); 

        });
      }
    );


    this.machineryservice.getMachineryList().
    subscribe(
      machineryList => {
        this.machineryList = machineryList;
      }
    );
    }
    /* reformatDate(dateToReforme) {
      let x = new Date(dateToReforme);
      let month = (x.getMonth() + 1)+"";
      if((x.getMonth() + 1)<10){
        month = "0"+ month;
      }
      let reformat = x.getFullYear() + "-" + month + "-" + (x.getDate() + 1);
      return reformat;
    }
     */

    edit() {
      this.maintenance.maintenanceTimeLineInitDate = this.datePipe.transform(this.maintenanceTimeLineInitDate, 'yyyy-MM-ddT00:00:00.000+0000');
      this.maintenanceservice.updateMaintenance(this.maintenance).
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
