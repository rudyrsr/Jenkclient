import { Component, OnInit } from '@angular/core';
import { FunctionManual } from '../shared/FunctionManual';
import { FunctionManualService } from '../services/function-manual.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'code-function-manual-detail',
  templateUrl: './function-manual-detail.component.html',
  styleUrls: ['./function-manual-detail.component.scss']
})
export class FunctionManualDetailComponent implements OnInit {
  functionManual: FunctionManual;
  functionManualId: number;
  
  constructor(private functionManualService: FunctionManualService,
              private activateRoute: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(
      (paramss)=>{
      this.functionManualId = paramss.id;
      this.functionManualService.getFunctionManualById(this.functionManualId)
      .subscribe(functionManual => this.functionManual = functionManual);
    });
  }
  goBack(): void{
    this.location.back();
  }
  deletePosition(functionManualId: number, functionManualName: string):void{
    let confir = confirm('Are you sure to delte this ' + functionManualName + ' Functional Manual');
    if(confir)
      this.functionManualService.deletePosition(functionManualId).subscribe(
        (response) =>{
          this.location.back();
        },(error) => {
          console.log('error', error);
        }
      )}

}
