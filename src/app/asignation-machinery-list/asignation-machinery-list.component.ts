import { Component, OnInit } from '@angular/core';
import { AsignationMachinery } from '../shared/asignationMachinery';
import { AsignationMachineryService } from '../services/asignation-machinery.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'code-asignation-machinery-list',
  templateUrl: './asignation-machinery-list.component.html',
  styleUrls: ['./asignation-machinery-list.component.scss']
})
export class AsignationMachineryListComponent implements OnInit {
  asignationMachineryList:AsignationMachinery[];
  displayedColumns = ['namemachinery', 'nameemployee', 'initdate','enddate','edit','delete'];
  dataSource:AsignationMachinery [] = [];
  
  constructor(private asignationMachineryservice:AsignationMachineryService,
    private location:Location,
    private router: Router) { 

  }

  ngOnInit() {
    this.asignationMachineryservice.getAsigantionList().subscribe(asignationMachineryList=>{
      this.asignationMachineryList=asignationMachineryList
      //console.log("jorge listando ", asignationMachineryList);
    });
  }

deleteAsignationMachinery(id: number): void {
  let confirmar = confirm('Are you sure to delete a Project: '+id);
  if(confirmar){
  this.asignationMachineryservice.deleteAsigantion(id).subscribe(
    (response) => {
      //console.log('response: ', response);
     this.router.navigate(['/asignationMachinery']);
    }, (error) => {
     // console.log('error: ', error);
    }
  )
}
this.location.go('asignationMachinery');

}

}


