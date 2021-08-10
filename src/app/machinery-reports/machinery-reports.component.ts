import { Component, OnInit } from '@angular/core';
import { Machinery } from '../shared/machinery';
import { MachineryService } from '../services/machinery.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'code-machinery-reports',
  templateUrl: './machinery-reports.component.html',
  styleUrls: ['./machinery-reports.component.scss']
})
export class MachineryReportsComponent implements OnInit {
  machineryList: Machinery [];

  displayedColumns = ['label', 'code', 'name','active' ,'view'];
  dataSource: Machinery[]= [];
  NombreMes:string;
  IdMes:number;
  constructor(
    private machineryservice:MachineryService,
    private activateroute: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.activateroute.params
    .subscribe(
      (paramss) =>{
        this.IdMes = paramss.id;
        if(this.IdMes==1)
          this.NombreMes="Enero";
        if(this.IdMes==2)
          this.NombreMes="Febrero";
        if(this.IdMes==3)
          this.NombreMes="Marzo";
        if(this.IdMes==4)
          this.NombreMes="Abril";
        if(this.IdMes==5)
          this.NombreMes="Mayo";
        if(this.IdMes==6)
          this.NombreMes="Junio";
        if(this.IdMes==7)
          this.NombreMes="Julio";
          if(this.IdMes==8)
          this.NombreMes="Agosto";
        if(this.IdMes==9)
          this.NombreMes="Septiembre";
        if(this.IdMes==10)
          this.NombreMes="Octubre";
        if(this.IdMes==11)
          this.NombreMes="Noviembre";
        if(this.IdMes==12)
          this.NombreMes="Diciembre";
        this.machineryservice.getMAchineryMes(this.IdMes)
        .subscribe(machineryList => this.machineryList =machineryList);
      }
      
    )
  }
  goBack(): void {
    this.location.back();
    }

}
