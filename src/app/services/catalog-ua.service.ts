import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {baseURL} from '../shared/baseurl';
import {CatalogUA} from '../shared/catalogUA';

const CatalogUAApiUrl='http://localhost:8080/catalogUA';

@Injectable({
  providedIn: 'root'
})
export class CatalogUAService {
  constructor( private httpclientCatalogUA: HttpClient) { 
  }
  getCatalogUAlist():Observable<any>{
    return this.httpclientCatalogUA.get(CatalogUAApiUrl);
  }
  getCatalogUAById(id:number):Observable<any>{
    return this.httpclientCatalogUA.get(`${CatalogUAApiUrl}/${id}`);
   }
   createNewCatalogUA(newCatalogUA): Observable<any>{
    return this.httpclientCatalogUA.post(CatalogUAApiUrl, newCatalogUA);
  }
  updateCatalogUA(newCatalogUA): Observable<any>{
    return this.httpclientCatalogUA.put(CatalogUAApiUrl, newCatalogUA);
  }
   deleteCatalogUA(deletedId:number ):Observable<any>{
    return this.httpclientCatalogUA.delete(`${CatalogUAApiUrl}/${deletedId}`);
  } 
  getCatalogUAByIdss(): Observable<number[]> {
    return this.getCatalogUAlist()
      .map(catalogUA => {
        return catalogUA.map(catalogUA => catalogUA.id);
      });
  }
  
}