import { Component, OnInit } from '@angular/core';
import { AsignationMachinery } from '../shared/asignationMachinery';
import { AsignationMachineryService } from '../services/asignation-machinery.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'code-asignation-machinery-detail',
  templateUrl: './asignation-machinery-detail.component.html',
  styleUrls: ['./asignation-machinery-detail.component.scss']
})
export class AsignationMachineryDetailComponent implements OnInit {

  asignationMachinery: AsignationMachinery;
  asignationMachineryId:number;

  constructor( private asiganationMachineryservice: AsignationMachineryService,
    private activateroute: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
  

    this.activateroute.params
    .subscribe(
      (paramss) =>{
        this.asignationMachineryId = paramss.id;
        this.asiganationMachineryservice.getAsigantionById(this.asignationMachineryId)
        .subscribe(asignationMachinery => this.asignationMachinery = asignationMachinery);
      }
    )
    }
    goBack(): void {
    this.location.back();
    }

    deleteToAsignation(machiID: number, nachinName: string, machiLabel: string): void {
      let confirmar = confirm('Are you sure to delete a machinery: '+nachinName+' of '+ machiLabel);
      if(confirmar)
      this.asiganationMachineryservice.deleteAsigantion(machiID).subscribe(
        (response) => {
          this.location.back();
        }, (error) => {
          console.log('error: ', error);
        }


      )}

}

