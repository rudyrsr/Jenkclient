import { Component, OnInit } from '@angular/core';
import { PositionService } from '../services/position.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'code-position-detail',
  templateUrl: './position-detail.component.html',
  styleUrls: ['./position-detail.component.scss']
})
export class PositionDetailComponent implements OnInit {
  position: Position;
  positionId: number;
  
  constructor(private positionService: PositionService,
              private activateRoute: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(
      (paramss)=>{
      this.positionId = paramss.id;
      this.positionService.getPositionById(this.positionId)
      .subscribe(position => this.position = position);
    });
  }
  goBack(): void{
    this.location.back();
  }
  deletePosition(positionId: number, positionName: string):void{
    let confir = confirm('Are you sure to delte this' + positionName + 'position');
    if(confir)
      this.positionService.deletePosition(positionId).subscribe(
        (response) =>{
          this.location.back();
        },(error) => {
          console.log('error', error);
        }
      )}

}
