import { Component, OnInit } from '@angular/core';
import {CommitedOcupationalService} from '../services/commited-ocupational.service';
import { Location } from '@angular/common';

@Component({
  selector: 'code-commited-ocupational-new',
  templateUrl: './commited-ocupational-new.component.html',
  styleUrls: ['./commited-ocupational-new.component.scss']
})
export class CommitedOcupationalNewComponent implements OnInit {

  project = {
    name: "",
    code: "",
    responsable: "",
    means: "",
    goalSO: "",
    cost: "",
  
  };
  id: number;

  constructor(
    private commitedOcupationalService: CommitedOcupationalService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  create() {
    console.log(this.project);
    this.commitedOcupationalService.createCommitedOcupational(this.project)
    .subscribe(
      (response) => {
        alert("Commited Ocupational has been created");
        this.location.back();
        /* console.log("ser creo correctamente el incidente:", this.project) */
      }, (error) => {
        console.log('error: ', error);
      }

    );
  }  

}
