import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ProjectAsignation } from '../shared/projectAsignation';

const projectAsignationApiUrl= 'http://localhost:8080/asignationProject';

@Injectable({
  providedIn: 'root'
})
export class ProjectAsignationService {

  constructor(
    private myhttpclient: HttpClient) { }

  getAsigPorjectList(): Observable<any>{
    return this.myhttpclient.get(projectAsignationApiUrl);
  }

  getAsigPorjectById(id: number): Observable<any> {
    return this.myhttpclient.get(projectAsignationApiUrl + '/' + id) ;
  }
  deleteAsigPorject(id: number ):Observable<any>{
    return this.myhttpclient.delete( projectAsignationApiUrl+'/'+id);
  }

  createAsignation(newAsignation): Observable<any>{
    return this.myhttpclient.post(projectAsignationApiUrl, newAsignation);
  }

  updateProjectAsignation(editAsignation):Observable<any>{
    return this.myhttpclient.put(projectAsignationApiUrl, editAsignation);
  }
}

