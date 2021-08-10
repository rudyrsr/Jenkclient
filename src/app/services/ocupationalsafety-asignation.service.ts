import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { OcupationalSafetyAsignation } from '../shared/ocupationalsafetyAsignation';

const ocupationalsafetyAsignationApiUrl= 'http://localhost:8080/asignationocupationalsafety';

@Injectable({
  providedIn: 'root'
})
export class OcupationalSafetyAsignationService {

  constructor(
    private myhttpclient: HttpClient) { }

  getAsigOcupationalSafetyList(): Observable<any>{
    return this.myhttpclient.get(ocupationalsafetyAsignationApiUrl).map((res) => {
      return res;
    }).catch(error => {
      console.log('error: ' + error);
      return error;
    });
  }

  getAsigOcupationalSafetyById(id: number): Observable<OcupationalSafetyAsignation> {
    return this.myhttpclient.get<OcupationalSafetyAsignation>(ocupationalsafetyAsignationApiUrl+ '/' + id)
      .map(res => {
        return res;
      });
  }
  deleteAsigOcupationalSafety(id: number ):Observable<any>{
    return this.myhttpclient.delete( ocupationalsafetyAsignationApiUrl+'/'+id)
      .map(res => {
        return res;
      });
  }

  createAsignation(newAsignation): Observable<any>{
    return this.myhttpclient.post(ocupationalsafetyAsignationApiUrl, newAsignation);
  }

  updateOcupationalSafetyAsignation(editAsignation):Observable<OcupationalSafetyAsignation>{
    return this.myhttpclient.put<OcupationalSafetyAsignation>(ocupationalsafetyAsignationApiUrl, editAsignation);
  }
}

