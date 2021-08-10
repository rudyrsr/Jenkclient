import { Component, OnInit } from '@angular/core';
import { OcupationalSafety} from '../shared/ocupationalsafety';
import { OcupationalSafetyService } from '../services/ocupationalsafety.service';

@Component({
  selector: 'code-ocupational-safety-list',
  templateUrl: './ocupational-safety-list.component.html',
  styleUrls: ['./ocupational-safety-list.component.scss']
})
export class OcupationalSafetyListComponent implements OnInit {

  ocupationalList:OcupationalSafety[];
  displayedColumns = ['Code','Name','FrequencyIndex', 'IncidentReduction', 'GoalReducction','Activities', 'view','edit'];
  dataSource:OcupationalSafety[]= [];

  constructor(private ocupationalSafetyService: OcupationalSafetyService) { 
    this.loadListOcupational();
  }

  ngOnInit() {
    
  }

  private loadListOcupational(){
    this.ocupationalSafetyService.getOcupationalSafetylist()
    .subscribe(ocupationalList => {
      this.ocupationalList = ocupationalList;
    });
  }

  deleteOcupationalSafety(idOcupationalSafety){
    this.ocupationalSafetyService.deleteOcupationalSafety(idOcupationalSafety)
          .subscribe( response => {
            alert("OcupationalSafety has been deleted");
            this.loadListOcupational();
          });
  }

}
