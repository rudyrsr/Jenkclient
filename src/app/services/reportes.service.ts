import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const reportesApiUrl= 'http://localhost:9091/reportes';
@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  constructor(
    private myhttpclient: HttpClient
  ) { }

  getReportesList():Observable<any>{
    return this.myhttpclient.get(reportesApiUrl);
  }
}
