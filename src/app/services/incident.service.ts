import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Incident } from '../shared/incident';

const incidentApiUrl= 'http://localhost:8080/incidents';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  constructor(
    private myhttpclient: HttpClient
  ) { }

  getIncidentList(): Observable<any>{
    return this.myhttpclient.get(incidentApiUrl).map((res) => {
      return res;
    }).catch(error => {
      console.log('error: ' + error);
      return error;
    });
  }

  getIncidentById(id: number): Observable<Incident> {
    return this.myhttpclient.get<Incident>(incidentApiUrl + '/' + id)
      .map(res => {
        return res;
      });
  }
  deleteIncident(id: number ):Observable<any>{
    return this.myhttpclient.delete( incidentApiUrl+'/'+id)
    .map(res => {
      return res;
    });
  }

  createNewIncident(newIncident): Observable<any>{
    return this.myhttpclient.post(incidentApiUrl, newIncident);
  }

  updateIncident(editIncident):Observable<any>{
    return this.myhttpclient.put(incidentApiUrl, editIncident);
  }

}
