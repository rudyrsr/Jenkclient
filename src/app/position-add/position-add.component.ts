import { Component, OnInit } from '@angular/core';
import { PositionService } from '../services/position.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';



@Component({
  selector: 'code-position-add',
  templateUrl: './position-add.component.html',
  styleUrls: ['./position-add.component.scss']
})
export class PositionAddComponent implements OnInit {
   position = {
    "positionName" : "",
    "positionCode" : "",
    "positionDescription" : "",
    "positionType" : ""
  };
  
  constructor(private positionService: PositionService, 
              private activateRoute: ActivatedRoute, 
              private location: Location) { }

  ngOnInit() {
  }
  addPosition()
  {
    this.positionService.addPosition(this.position)
    .subscribe(
      response => {
        alert("Position Created");
        this.location.back();
      }, (error) =>{
        console.log('error',error);
      }
    )
  }
}
