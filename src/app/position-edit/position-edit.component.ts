import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PositionService } from '../services/position.service';

@Component({
  selector: 'code-position-edit',
  templateUrl: './position-edit.component.html',
  styleUrls: ['./position-edit.component.scss']
})
export class PositionEditComponent implements OnInit {
  positionId: number;
  position = {
    "positionName" : "",
    "positionCode" : "",
    "positionDescription" : "",
    "positionType" : ""
  };

  constructor(private positionService: PositionService, 
              private location: Location, 
              private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(
      (paramss) => {
        this.positionId = paramss.id;
        this.positionService.getPositionById(this.positionId)
        .subscribe(
          position =>{
            this.position = position;
          }
        )
      }
    )
  }
  updatePosition()
  {
    this.positionService.updatePosition(this.position, this.positionId)
      .subscribe(
        (response) =>{
        alert("The Postion has been updated");
        this.location.back();
      },(error) =>
      {
        console.log('error',error);
      }
      )
  }
}
