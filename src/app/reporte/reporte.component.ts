import { Component, OnInit } from '@angular/core';
import { Reportes } from '../shared/reportes';
import { ReportesService } from '../services/reportes.service';

@Component({
  selector: 'code-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss']
})
export class ReporteComponent implements OnInit {

  reportesList: Reportes[];

  displayedColumns = ['projectname','projectlocation' ,'firstname','lastname','accidentname',
                      'accidentdate','catalogfi','catalogni','catalogtd','catalogua','cataloguc'];
  dataSource:Reportes[]= [];


  constructor(
    private reportesservice: ReportesService
  ) { }

  ngOnInit() {
    this.reportesservice.getReportesList()
      .subscribe(reportesList => {
        this.reportesList = reportesList
        console.log('reportes list: ', this.reportesList);
    });
  }

}
