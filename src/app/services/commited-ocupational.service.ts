import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CommitedOcupational } from '../shared/commitedocupational';

const ocupationalsafetyAsignationApiUrl= 'http://localhost:8080/committees';

@Injectable({
  providedIn: 'root'
})
export class CommitedOcupationalService {

  constructor(
    private myhttpclient: HttpClient) { }

  getCommitedOcupationalList(): Observable<any>{
    return this.myhttpclient.get(ocupationalsafetyAsignationApiUrl).map((res) => {
      return res;
    }).catch(error => {
      console.log('error: ' + error);
      return error;
    });
  }

  getCommitedOcupationalById(id: number): Observable<any> {
    return this.myhttpclient.get<CommitedOcupational>(ocupationalsafetyAsignationApiUrl+ '/' + id)
      .map(res => {
        return res;
      });
  }
  deleteCommitedOcupational(id: number ):Observable<any>{
    return this.myhttpclient.delete( ocupationalsafetyAsignationApiUrl+'/'+id)
      .map(res => {
        return res;
      });
  }

  createCommitedOcupational(newAsignation): Observable<any>{
    return this.myhttpclient.post(ocupationalsafetyAsignationApiUrl, newAsignation);
  }

  updateCommitedOcupational(id:number, newCommitedOcupational): Observable<any>{
    return this.myhttpclient.put(`${ocupationalsafetyAsignationApiUrl}/${id}`, newCommitedOcupational);
  }
}

