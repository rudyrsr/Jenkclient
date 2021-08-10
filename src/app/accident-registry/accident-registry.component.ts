import {Component, OnInit} from '@angular/core'
import {AccidentRegistry} from '../shared/accidentRegistry';
import {AccidentRegistryService} from '../services/accident-registry.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'code-accident-registry',
  templateUrl: './accident-registry.component.html',
  styleUrls: ['./accident-registry.component.scss']
})
export class AccidentRegistryComponent implements OnInit {
  catalogRlist: AccidentRegistry[];
  displayedColumns = ['Code', 'Name', 'Description','Date','Hour','view'];
  dataSource:AccidentRegistry[]= [];
  anio = {
    id: 1,
    namea: ""
  };
  mounts = [];
  mountt = {
    id: 0,
    nombreMes: ""
  }
  url="";
  idMounts=0;
  constructor(
    private accidentRservice: AccidentRegistryService,
    private activateroute: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }
  ngOnInit() {
    this.accidentRservice.getAccidentRlist()
      .subscribe(catalogRlist =>{
      this.catalogRlist= catalogRlist
        console.log("accident R list: ", this.catalogRlist);
    });


  }

  getanio() {
    this.url = "/accidentRegistry/an/" + this.anio.namea;
    this.router.navigate([this.url]);
  }
}
