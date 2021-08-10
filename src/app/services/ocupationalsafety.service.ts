import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {baseURL} from '../shared/baseurl';
import {OcupationalSafety} from '../shared/ocupationalsafety';

const OcupationalSafetyApiUrl= 'http://localhost:8080/ocupationalsafeties';

@Injectable({
  providedIn: 'root'
})
export class OcupationalSafetyService {

  constructor( private httpclientOcupationalSafety: HttpClient) {
  }
  getOcupationalSafetylist():Observable<any>{
    return this.httpclientOcupationalSafety.get(OcupationalSafetyApiUrl);
  }
  getOcupationalSafetyById(id:number):Observable<any>{
    return this.httpclientOcupationalSafety.get(`${OcupationalSafetyApiUrl}/${id}`);
  }
  createNewOcupationalSafety(newOcupationalSafety): Observable<any>{
    return this.httpclientOcupationalSafety.post(OcupationalSafetyApiUrl, newOcupationalSafety);
  }
  updateOcupationalSafety(id:number, newOcupationalSafety): Observable<any>{
    return this.httpclientOcupationalSafety.put(`${OcupationalSafetyApiUrl}/${id}`, newOcupationalSafety);
  }
  deleteOcupationalSafety(deletedId:number ):Observable<any>{
    return this.httpclientOcupationalSafety.delete(`${OcupationalSafetyApiUrl}/${deletedId}`);
  }
  /*getOcupationalSafetyByIdss(): Observable<number[]> {
    return this.getOcupationalSafetylist()
      .map(ocupationalsafety => {
        return ocupationalsafety.map(ocupationalsafety => ocupationalsafety.id);
      });
  }*/

}
