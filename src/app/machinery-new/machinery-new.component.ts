import { Component, OnInit } from '@angular/core';
import { MachineryService } from '../services/machinery.service';
import { MachineryCatalogService } from '../services/machinery-catalog.service';
import { Location } from '@angular/common';

@Component({
  selector: 'code-machinery-new',
  templateUrl: './machinery-new.component.html',
  styleUrls: ['./machinery-new.component.scss']
})
export class MachineryNewComponent implements OnInit {
  machinery = {
  machineryCode: "MA",
  machineryName: "",
  machineryBrand: "",
  machineryPrice: "",
  machineryDateBuy: "",
  machineryCatalogId: ""
  };
  catalogList = [];
  constructor(
    private machineryservice: MachineryService,
    private machinerycatalogservice: MachineryCatalogService,
    private location: Location
 
  ) { }

  ngOnInit() {

    this.machinerycatalogservice.getMachineryCatalogList().
      subscribe(
        catalogList => {
          this.catalogList = catalogList;
        }
      );
  }

  create() {
    this.machineryservice.createNewMachinery(this.machinery).
      subscribe(
        (response) => {
          alert("the machinery has been created");
          this.location.back();
         
        }, (error) => {
          console.log('error: ', error);
        }
        
      )
  }

}
