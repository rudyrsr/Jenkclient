import { Component, OnInit } from '@angular/core';
import { Machinery } from '../shared/machinery';
import { MachineryService } from '../services/machinery.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'code-machinery-reports-year',
  templateUrl: './machinery-reports-year.component.html',
  styleUrls: ['./machinery-reports-year.component.scss']
})
export class MachineryReportsYearComponent implements OnInit {
  machineryList: Machinery [];

  displayedColumns = ['label', 'code', 'name','active' ,'view','edit'];
  dataSource: Machinery[]= [];
  IdAnio:number;
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
        this.IdAnio = paramss.id;
        this.machineryservice.getMachineryAnio(this.IdAnio)
        .subscribe(machineryList => this.machineryList =machineryList);
      }
    )
  }
  goBack(): void {
    this.location.back();
    }

}
