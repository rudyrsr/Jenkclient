import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { AccidentRegistry } from '../shared/accidentRegistry';
import { AccidentRegistryService } from '../services/accident-registry.service';
import { AccidentService } from '../services/accident.service';

@Component({
  selector: 'code-accident-registry-detail',
  templateUrl: './accident-registry-detail.component.html',
  styleUrls: ['./accident-registry-detail.component.scss']
})
export class AccidentRegistryDetailComponent implements OnInit {

  accidentRegistry: AccidentRegistry;
  accidentRID=0; 
  accidentId=0;
  constructor (
    private accidentRService:AccidentRegistryService,
    private accidentService:AccidentService,
    private activateroute: ActivatedRoute,
    private location: Location) {

     }
     ngOnInit() {
      this.activateroute.params
      .subscribe(
        (paramss) => {  
          this.accidentRID = paramss.id;
          this.accidentRService.getAccidentRById(this.accidentRID)
          .subscribe(accidentRegistry => {
            this.accidentRegistry = accidentRegistry;
          });

        
        }
      )
      }
      goBack(): void {
      this.location.back();
      }
      deleteToAccidentR(AccidentRId: number,EmployeeName:string,Description: string,accidentId:number): void {
        let confirmar = confirm('Are you sure to delete a Resgistry: '+AccidentRId+' of '+EmployeeName+' of '+Description);
        if(confirmar)
        this.accidentRService.deleteAccidentR(this.accidentRID).subscribe(
          (response) => {
            this.location.back();
          }, (error) => {
            console.log('error: ', error);
          }
          
        )
        this.accidentId=accidentId;
        console.log('accident Id: ',this.accidentId);
        this.accidentService.deleteAccident(accidentId).subscribe(
          (response) => {
            console.log('codigo:',accidentId);
          }, (error) => {
            console.log('error: ', error);
          }
        )

      }
}
