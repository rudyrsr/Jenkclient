import { Component, OnInit } from '@angular/core';
import { Machinery } from '../shared/machinery';
import { MachineryService } from '../services/machinery.service';
import {Location} from '@angular/common';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'code-machinery-detail',
  templateUrl: './machinery-detail.component.html',
  styleUrls: ['./machinery-detail.component.scss']
})
export class MachineryDetailComponent implements OnInit {

  machinery:Machinery;
  machineryId:number;

  constructor(private machineryservice: MachineryService,
    private activateroute: ActivatedRoute,
    private location: Location,
    private router: Router) { }

  ngOnInit() {
    this.activateroute.params
    .subscribe(
      (paramss) =>{
        this.machineryId = paramss.id;
        this.machineryservice.getMachineryById(this.machineryId)
        .subscribe(machinery => this.machinery = machinery);
      }
    )
    }
    goBack(): void {
    this.location.back();
    }

    deleteToMachinery(machiID: number, nachinName: string, machiLabel: string): void {
      let confirmar = confirm('Are you sure to delete a machinery: '+nachinName+' of '+ machiLabel);
      if(confirmar)
      this.machineryservice.deleteMachinery(machiID).subscribe(
        (response) => {
          this.location.back();
        }, (error) => {
          console.log('error: ', error);
        }


      )}

}
