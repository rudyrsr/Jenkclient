import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


const auditoryApiUrl= 'http://localhost:8080/auditory';

@Injectable({
  providedIn: 'root'
})
export class AuditoryHistoryService {

  constructor(
    private myhttpclient: HttpClient
  ) { }

  getAuditoryList():Observable<any>{
    return this.myhttpclient.get(auditoryApiUrl);

  }
}
