import { Component, OnInit } from '@angular/core';
import {CommitedOcupational} from '../shared/commitedocupational';
import {CommitedOcupationalService} from '../services/commited-ocupational.service';

@Component({
  selector: 'code-ocupational-commited-list',
  templateUrl: './ocupational-commited-list.component.html',
  styleUrls: ['./ocupational-commited-list.component.scss']
})
export class OcupationalCommitedListComponent implements OnInit {
  ocupationalList:CommitedOcupational[];
  displayedColumns = ['name','code','Responsable', 'Means', 'GoalSO','Cost','view','edit'];
  dataSource:CommitedOcupational[]= [];

  constructor(private commitedOcupationalService: CommitedOcupationalService) { 
    this.loadListCommitedOcupational()
  }

  private loadListCommitedOcupational(){
    this.commitedOcupationalService.getCommitedOcupationalList()
      .subscribe(commitedOcupationalList => {
        this.ocupationalList = commitedOcupationalList;
      });
  }

  ngOnInit() {
  }

  deleteCommitedOcupational(idCommitedOcupational){
    this.commitedOcupationalService.deleteCommitedOcupational(idCommitedOcupational)
      .subscribe(response => {
        alert("Commited Ocupational has been deleted");
        this.loadListCommitedOcupational();
      });
  }
}
