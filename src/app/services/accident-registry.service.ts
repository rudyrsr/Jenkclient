import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {AccidentRegistry} from '../shared/accidentRegistry';

const AccidentRApiUrl='http://localhost:8080/accidentR';
const AccidentRApiUrlRm = 'http://localhost:8080/accidentR/ms';
const AccidentRApiUrlRa = 'http://localhost:8080/accidentR/an';
const AccidentRApiUrlRms = 'http://localhost:8080/accidentR/mss';
@Injectable({
  providedIn: 'root'
})
export class AccidentRegistryService {
  constructor(private httpclientAccidentR: HttpClient) {
  }
  getAccidentRlist():Observable<any>{
    return this.httpclientAccidentR.get(AccidentRApiUrl);
  }
  getAccidentRById(id:number):Observable<any>{
    return this.httpclientAccidentR.get(`${AccidentRApiUrl}/${id}`);
   }
   createAccidentRegistry(newAsignation): Observable<any>{
    return this.httpclientAccidentR.post(AccidentRApiUrl, newAsignation);
   }
  updateAccidentRegistry(editAsignation):Observable<AccidentRegistry>{
    return this.httpclientAccidentR.put<AccidentRegistry>(AccidentRApiUrl, editAsignation);
  }
   deleteAccidentR(deletedId:number ):Observable<any>{
    return this.httpclientAccidentR.delete(`${AccidentRApiUrl}/${deletedId}`);
   }

  getMounths(): Observable<any> {
    return this.httpclientAccidentR.get(AccidentRApiUrlRms);
  }

  getAccidentMes(id: number, anio: number): Observable<any> {
    return this.httpclientAccidentR.get(`${AccidentRApiUrlRm}/${id}&${anio}`);
  }

  getAccidentAnio(id: number): Observable<any> {
    return this.httpclientAccidentR.get(`${AccidentRApiUrlRa}/${id}`);
  }
}
