import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IncidentCatalog } from '../shared/incidentCatalog';

const incidentCatalogApiUrl= 'http://localhost:8080/incidentCatalogs';

@Injectable({
  providedIn: 'root'
})
export class IncidentCatalogService {

  constructor(
     private myhttpclient: HttpClient
  ) { }

  getIncidentCatalogList(): Observable<any>{
    return this.myhttpclient.get(incidentCatalogApiUrl).map((res) => {
      return res;
    }).catch(error => {
      console.log('error: ' + error);
      return error;
    });
  }
  getIncidentCatalogById(id: number): Observable<IncidentCatalog> {
    return this.myhttpclient.get<IncidentCatalog>(incidentCatalogApiUrl + '/' + id)
      .map(res => {
        return res;
      });
  }
  deleteIncidentCatalog(id: number ):Observable<any>{
    return this.myhttpclient.delete( incidentCatalogApiUrl+'/'+id)
    .map(res => {
      return res;
    });
  }
  createNewCatalogIncident(catalogIncident): Observable<any>{
    return this.myhttpclient.post(incidentCatalogApiUrl, catalogIncident);
  }
  updateCatalogIncident(editCatalog):Observable<any>{
    return this.myhttpclient.put(incidentCatalogApiUrl, editCatalog);
  }
}
