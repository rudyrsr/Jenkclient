import { Component, OnInit } from '@angular/core';
import { MachineryCatalogService } from '../services/machinery-catalog.service';
import { Location } from '@angular/common';

@Component({
  selector: 'code-machinery-catalog-new',
  templateUrl: './machinery-catalog-new.component.html',
  styleUrls: ['./machinery-catalog-new.component.scss']
})
export class MachineryCatalogNewComponent implements OnInit {
machineryCatalog={
  machinerycatalogCod: "MAC",
  machinerycatalogName: "",
  characteristics: "",
  machinerycatalogDescription: "",
}
  constructor(private machinerycatalogservice: MachineryCatalogService,
    private location: Location) { 
    
  }

  ngOnInit() {
  }

create() {
this.machinerycatalogservice.createNewMachineryCatalog(this.machineryCatalog).
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