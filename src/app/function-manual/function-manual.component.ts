import { Component, OnInit } from '@angular/core';
import { FunctionManual } from '../shared/FunctionManual';
import { FunctionManualService } from '../services/function-manual.service';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'code-function-manual',
  templateUrl: './function-manual.component.html',
  styleUrls: ['./function-manual.component.scss']
})
export class FunctionManualComponent implements OnInit {

  functionManuals : FunctionManual[];
  displayedColumns = ['id', 'code', 'name', 'description', 'url', 'view'];
  dataSource : any;

      
  constructor(private functionManualService: FunctionManualService) { }

  ngOnInit() {
    this.functionManualService.getFunctionManuals().subscribe(functionManuals => 
      {this.functionManuals = functionManuals;
        this.dataSource = new MatTableDataSource(this.functionManuals);
      });
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitspace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches  
    this.dataSource.filter = filterValue;
  }
}
