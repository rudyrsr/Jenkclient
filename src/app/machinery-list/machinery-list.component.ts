import { Component, OnInit } from '@angular/core';
import { Machinery } from '../shared/machinery';
import { MachineryService } from '../services/machinery.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'code-machinery-list',
  templateUrl: './machinery-list.component.html',
  styleUrls: ['./machinery-list.component.scss']
})
export class MachineryListComponent implements OnInit {
  machineryList: Machinery [];

  displayedColumns = ['label','name','active' ,'view','edit'];
  dataSource: Machinery[]= [];
  anio={
    id:1,
    namea:""
  }; 
  mounts=[];
  mountt={
    id:0,
    nombreMes:""
  }
  url="";
  idMounts:number;

  constructor( private machineryservice:MachineryService,
         private activateroute: ActivatedRoute,
         private router:Router
         //private location: Location
  ) { }

  ngOnInit() {
    this.machineryservice.getMachineryList().subscribe(
      machineryList =>{ this.machineryList=machineryList
       } 
      );
    this.machineryservice.getMounths()
     .subscribe(mounts =>{
     this.mounts= mounts;
   // console.log("meses: ",this.mounts);   
   });
  }
  getanio()
  {
    location.href="/machinery/an/"+this.anio.namea;
  }
  getmounth()
  {
    this.url="/machinery/ms/"+this.mountt.id;
    this.router.navigate([this.url]);
  }
  deleteToMachinery(machiID: number, nachinName: string, machiLabel: string): void {
    let confirmar = confirm('Are you sure to delete a machinery: '+nachinName+' of '+ machiLabel);
    if(confirmar)
    this.machineryservice.deleteMachinery(machiID).subscribe(
      (response) => {
       // this.location.back();
      }, (error) => {
        console.log('error: ', error);
      }
    )}
    
}
