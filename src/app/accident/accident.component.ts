import { Component, OnInit, ViewChild } from '@angular/core'
import { Accident } from '../shared/accident';
import { AccidentService } from '../services/accident.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'code-accident',
  templateUrl: './accident.component.html',
  styleUrls: ['./accident.component.scss']
})
export class AccidentComponent implements OnInit {
  accidentlist: Accident[];
  displayedColumns = ['Code', 'Description', 'Supervisor','MedicalCenter','AccidentPlace','AccidentWitness','AccidentDesabilityDay','CatalogFI','CatalogNI','CatalogTD','CatalogUC','CatalogUA', 'view', 'edit', 'delete'];
  dataSource:Accident[]= [];
  constructor(
    private accidentservice: AccidentService
  ) { }
  
  
  ngOnInit() {
    this.accidentservice.getAccidentlist()
      .subscribe(accidentlist =>{
      this.accidentlist=accidentlist
      console.log("accidentlist list: ",this.accidentlist);   
    });


  }

}
