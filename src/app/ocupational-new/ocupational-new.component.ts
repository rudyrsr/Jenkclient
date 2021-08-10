import { Component, OnInit } from '@angular/core';
import {OcupationalSafety} from '../shared/ocupationalsafety';
import { OcupationalSafetyService } from '../services/ocupationalsafety.service';
import { Location } from '@angular/common';


@Component({
  selector: 'code-ocupational-new',
  templateUrl: './ocupational-new.component.html',
  styleUrls: ['./ocupational-new.component.scss']
})
export class OcupationalNewComponent implements OnInit {

 
  project = {
    code: "",
    name: "",
    frequencyIndex: "",
    incidentReduction: "",
    goalReducction: "",
    activities: ""
  };
  id: number;

  constructor(
    private ocupationalsafetyservice: OcupationalSafetyService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  create() {
    this.ocupationalsafetyservice.createNewOcupationalSafety(this.project).
    subscribe(
      (response) => {
        alert("OcupationalSafety has been created");
        this.location.back();
        /* console.log("ser creo correctamente el incidente:", this.project) */
      }, (error) => {
        console.log('error: ', error);
      }

    );
  }  

}
