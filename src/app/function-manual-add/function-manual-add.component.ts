import { Component, OnInit } from '@angular/core';
import { FunctionManualService } from '../services/function-manual.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PositionService } from '../services/position.service';

@Component({
  selector: 'code-function-manual-add',
  templateUrl: './function-manual-add.component.html',
  styleUrls: ['./function-manual-add.component.scss']
})
export class FunctionManualAddComponent implements OnInit {

  functionManual = {
    "functionalmanualCode" : "",
    "functionalmanualName" : "",
    "functionalmanualDescription" : "",
    "functionalmanualUrl" : "",
    "educationLevel":"",
    "organitationalLevel":"",
    "positionId":""
  };

  positions = []; 
  
  constructor(private functionManualService: FunctionManualService, 
              private positionService: PositionService,
              private activateRoute: ActivatedRoute, 
              private location: Location) { }

  ngOnInit() {
    this.positionService.getPositions().
    subscribe(
      positions => {
        this.positions = positions;
      }
    );
  }
  addFunctManual()
  {
    this.functionManualService.addFunctionalManual(this.functionManual)
    .subscribe(
      response => {
        alert("Functional Manual Created");
        this.location.back();
      }, (error) =>{
        console.log('error',error);
      }
    )
  }

}
