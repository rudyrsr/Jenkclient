import { Component, OnInit } from '@angular/core';
import { FunctionManualService } from '../services/function-manual.service';
import { FunctionManual } from '../shared/FunctionManual';
import {MatTableDataSource} from '@angular/material';
import { PositionService } from '../services/position.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'code-position-manual',
  templateUrl: './position-manual.component.html',
  styleUrls: ['./position-manual.component.scss']
})
export class PositionManualComponent implements OnInit {
  functionalManuals : FunctionManual[];
  displayedColumns = ['id','funcitionalManual', 'positionId', 'position'];
  //dataSource1 : FunctionManual[] = [];
  positions: Position [];
  dataSource: any;

  constructor(private functionalManualService: FunctionManualService, 
    private positionService: PositionService) { }

  ngOnInit() {
    this.functionalManualService.getFunctionManuals().subscribe(
      functionalManuals =>{
        this.functionalManuals = functionalManuals;
        this.dataSource = new MatTableDataSource(this.functionalManuals);
      });
        this.positionService.getPositions().subscribe(positions => this.positions = positions);
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches  
    this.dataSource.filter = filterValue;
  }
}
