import { Component, OnInit } from '@angular/core';
import {OcupationalSafety} from '../shared/ocupationalsafety';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import {OcupationalSafetyService} from '../services/ocupationalsafety.service'

@Component({
  selector: 'code-ocupational-edit',
  templateUrl: './ocupational-edit.component.html',
  styleUrls: ['./ocupational-edit.component.scss']
})
export class OcupationalEditComponent implements OnInit {
  ocupationalSafety:OcupationalSafety;
  ocupationalSafetyId:number;
  ocupationalSafetyList=[];

  project = {
    code: "",
    name: "",
    frequencyIndex: "",
    incidentReduction: "",
    goalReducction: "",
    activities: ""
  };

  constructor(private ocupationalSafetyService: OcupationalSafetyService,
              private activateroute: ActivatedRoute,
              private location: Location,
              private router: Router) { 

  }

  ngOnInit() {
    this.activateroute.params
    .subscribe(
      (paramss) =>{
        this.ocupationalSafetyId = paramss.id;
        this.ocupationalSafetyService.getOcupationalSafetyById(this.ocupationalSafetyId)
             .subscribe(ocupationalSafety => {
               this.project = ocupationalSafety;
             });
      }
    );
  }

  create(){
    this.ocupationalSafetyService.updateOcupationalSafety(this.ocupationalSafetyId, this.project)
      .subscribe(res => {
        alert("OcupationalSafety has been updated");
        this.location.back();
      });
  }

 

}
