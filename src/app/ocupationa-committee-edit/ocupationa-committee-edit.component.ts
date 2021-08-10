import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import {CommitedOcupationalService} from '../services/commited-ocupational.service';

@Component({
  selector: 'code-ocupationa-committee-edit',
  templateUrl: './ocupationa-committee-edit.component.html',
  styleUrls: ['./ocupationa-committee-edit.component.scss']
})
export class OcupationaCommitteeEditComponent implements OnInit {

  committeeOcupationaId: number;

  project = {
    name: "",
    code: "",
    responsable: "",
    means: "",
    goalSO: "",
    cost: "",
  
  };
  id: number;


  constructor(private commitedOcupationalService: CommitedOcupationalService,
              private activateroute: ActivatedRoute,
              private location: Location,
              private router: Router
  ) { }

  ngOnInit() {
    this.activateroute.params
    .subscribe(
      (paramss) =>{
         this.committeeOcupationaId = paramss.id;
         this.commitedOcupationalService.getCommitedOcupationalById(this.committeeOcupationaId)
            .subscribe(committeeResponse => {
              this.project = committeeResponse;
            }); 
      }
    );
  }

  create() {
    this.commitedOcupationalService.updateCommitedOcupational(this.committeeOcupationaId, this.project)
    .subscribe(
      (response) => {
        alert("Commited Ocupational has been updated");
        this.location.back();
        /* console.log("ser creo correctamente el incidente:", this.project) */
      }, (error) => {
        console.log('error: ', error);
      }
    );
  }

}
