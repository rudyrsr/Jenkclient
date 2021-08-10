import { Component, OnInit } from '@angular/core';
import { FunctionManualService } from '../services/function-manual.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PositionService } from '../services/position.service';

@Component({
  selector: 'code-function-manual-edit',
  templateUrl: './function-manual-edit.component.html',
  styleUrls: ['./function-manual-edit.component.scss']
})
export class FunctionManualEditComponent implements OnInit {

  functionalManualId: number;
  positions = [];
  functionManual = {
    "id":"",
    "functionalmanualCode" : "",
    "functionalmanualName" : "",
    "functionalmanualDescription" : "",
    "functionalmanualUrl" : "",
    "educationLevel":"",
    "organitationalLevel":"",
    "positionId":""
  };
  constructor(private functionalManualService: FunctionManualService, 
              private location: Location, 
              private positionService: PositionService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(
      (paramss) => {
        this.functionalManualId = paramss.id;
        this.functionalManualService.getFunctionManualById(this.functionalManualId)
        .subscribe(
          functionManual =>{
            this.functionManual.id = functionManual.id;
            this.functionManual.functionalmanualCode = functionManual.functionalmanualCode;
            this.functionManual.functionalmanualName = functionManual.functionalmanualName;
            this.functionManual.functionalmanualDescription = functionManual.functionalmanualDescription;
            this.functionManual.functionalmanualUrl = functionManual.functionalmanualUrl;
            this.functionManual.educationLevel = functionManual.educationLevel;
            this.functionManual.organitationalLevel = functionManual.organitationalLevel;
            this.functionManual.positionId = functionManual.positionCommand.id;
          }
        )
      }
    )
    this.positionService.getPositions().
    subscribe(
      positions => {
        this.positions = positions;
      }
    );
  }
  updateFuncManual()
  {
    this.functionalManualService.updateFuncManual(this.functionManual, this.functionalManualId)
      .subscribe(
        (response) =>{
        alert("The Function Manual has been updated");
        this.location.back();
      },(error) =>
      {
        console.log('error',error);
      }
      )
  }
}
