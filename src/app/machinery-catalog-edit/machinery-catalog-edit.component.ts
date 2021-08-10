import { Component, OnInit } from '@angular/core';
import { MachineryCatalog } from '../shared/machineryCatalog';
import { MachineryCatalogService } from '../services/machinery-catalog.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'code-machinery-catalog-edit',
  templateUrl: './machinery-catalog-edit.component.html',
  styleUrls: ['./machinery-catalog-edit.component.scss']
})
export class MachineryCatalogEditComponent implements OnInit {
  machineryCatalogId:number;
  machineryCatalog: MachineryCatalog;
  // machineryCatalog={
  //   machinerycatalogName:"",
  //   characteristics:"",
  //   machinerycatalogDescription:""
  // };
  constructor(private machineryCatalogservice: MachineryCatalogService,
    private activateroute: ActivatedRoute,
    private location: Location,
    private router: Router) { }

  ngOnInit() {
    this.activateroute.params
    .subscribe(
      (paramss) =>{
        this.machineryCatalogId = paramss.id;
        this.machineryCatalogservice.getMachineryCatalogById(this.machineryCatalogId)
        .subscribe(machineryCatalog => {
          this.machineryCatalog= machineryCatalog;
          // this.machineryCatalog.machinerycatalogName = machineryCatalog.machinerycatalogName;
          // this.machineryCatalog.characteristics= machineryCatalog.characteristics;
          // this.machineryCatalog.machinerycatalogDescription= machineryCatalog.machinerycatalogDescription;
          //console.log(">>>>>>",machineryCatalog)
        }
      )
  }
)
  }
    edit() {
      this.machineryCatalogservice.updateMachineryCatalog(this.machineryCatalog).
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

