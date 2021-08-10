import { Component, OnInit } from '@angular/core';
import { Machinery } from '../shared/machinery';
import { MachineryService } from '../services/machinery.service';
import { ActivatedRoute } from '@angular/router';
import {Location, DatePipe} from '@angular/common';
import { MachineryCatalogService } from '../services/machinery-catalog.service';

@Component({
  selector: 'code-machinery-edit',
  templateUrl: './machinery-edit.component.html',
  styleUrls: ['./machinery-edit.component.scss']
})
export class MachineryEditComponent implements OnInit {
  
  machineryId:number;
  machinery:Machinery;
  machineryBuyDate: Date;

  catalogList = [];
  constructor(private machineryservice: MachineryService,
    private activateroute: ActivatedRoute,
    private location: Location,
    private datePipe: DatePipe,
    private machinerycatalogservice: MachineryCatalogService) { }

ngOnInit() {
    this.activateroute.params
    .subscribe(
      (paramss) =>{
        this.machineryId = paramss.id;
        this.machineryservice.getMachineryById(this.machineryId)
        .subscribe(machinery => {
          this.machinery = machinery;
          this.machineryBuyDate = new Date(this.machinery.machineryDateBuy);
        });
      }
    );


    this.machinerycatalogservice.getMachineryCatalogList().
    subscribe(
      catalogList => {
        this.catalogList = catalogList;
        /* console.log("lista de catalogos ", this.catalogList) */
      }
    );
    }

    edit() {
      this.machinery.machineryDateBuy = this.datePipe.transform(this.machineryBuyDate, 'yyyy-MM-ddT00:00:00.000+0000');
      this.machineryservice.updateMachinery(this.machinery).
        subscribe(
          (response) => {
            alert("the machinery has been update");
            this.location.back();
          }, (error) => {
            console.log('error: ', error);
          }
        )
    }
  }


