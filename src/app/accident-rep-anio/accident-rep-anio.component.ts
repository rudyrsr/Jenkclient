import {Component, OnInit} from '@angular/core'
import {AccidentRegistry} from '../shared/accidentRegistry';
import {AccidentRegistryService} from '../services/accident-registry.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'code-accident-rep-anio',
  templateUrl: './accident-rep-anio.component.html',
  styleUrls: ['./accident-rep-anio.component.scss']
})
export class AccidentRepAnioComponent implements OnInit {
  catalogRlist: AccidentRegistry[];
  displayedColumns = ['Code', 'Name', 'Description', 'Date', 'Hour', 'view'];
  dataSource: AccidentRegistry[] = [];
  IdAnio: number;
  NombreMes = "";
  mounts = [];
  mountt = {
    id: 0,
    nombreMes: ""
  }
  url: String;
  idMounts: number;
  count = 0;

  constructor(
    private accidentRservice: AccidentRegistryService,
    private activateroute: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.activateroute.params
      .subscribe(
        (paramss) => {
          this.IdAnio = paramss.id;
          this.accidentRservice.getAccidentAnio(this.IdAnio)
            .subscribe(catalogRlist => this.catalogRlist = catalogRlist);
        }
      )
    this.accidentRservice.getMounths()
      .subscribe(mounts => {
        this.mounts = mounts;
        console.log("meses: ", this.mounts);
      });
  }

  goBack(): void {
    if (this.count == 0) {
      this.url = "accidentRegistry";
      this.router.navigate([this.url]);
    }
    if (this.count > 0) {
      console.log("contador" + this.count);
      this.accidentRservice.getAccidentAnio(this.IdAnio)
        .subscribe(catalogRlist => this.catalogRlist = catalogRlist);
      this.url = "/accidentRegistry/an/" + this.IdAnio;
      this.router.navigate([this.url]);
      this.count = 0;
      this.NombreMes = "";
    }
  }

  getmounth() {
    if (this.mountt.id == 1)
      this.NombreMes = "January";
    if (this.mountt.id == 2)
      this.NombreMes = "February";
    if (this.mountt.id == 3)
      this.NombreMes = "March";
    if (this.mountt.id == 4)
      this.NombreMes = "April";
    if (this.mountt.id == 5)
      this.NombreMes = "May";
    if (this.mountt.id == 6)
      this.NombreMes = "June";
    if (this.mountt.id == 7)
      this.NombreMes = "July";
    if (this.mountt.id == 8)
      this.NombreMes = "August";
    if (this.mountt.id == 9)
      this.NombreMes = "September";
    if (this.mountt.id == 10)
      this.NombreMes = "October";
    if (this.mountt.id == 11)
      this.NombreMes = "November";
    if (this.mountt.id == 12)
      this.NombreMes = "December";

    this.count = 1;
    this.accidentRservice.getAccidentMes(this.mountt.id, this.IdAnio)
      .subscribe(catalogRlist => this.catalogRlist = catalogRlist);
    this.url = "/accidentRegistry/an/" + this.IdAnio;
    this.router.navigate([this.url]);
  }

}
