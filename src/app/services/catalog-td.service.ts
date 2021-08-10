import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {baseURL} from '../shared/baseurl';
import {CatalogTD} from '../shared/catalogTD';

const CatalogTDApiUrl='http://localhost:8080/catalogTD';

@Injectable({
  providedIn: 'root'
})
export class CatalogTDService {
  constructor( private httpclientCatalogTD: HttpClient) { 
  }
  getCatalogTDlist():Observable<any>{
    return this.httpclientCatalogTD.get(CatalogTDApiUrl);
  }
  getCatalogTDById(id:number):Observable<any>{
    return this.httpclientCatalogTD.get(`${CatalogTDApiUrl}/${id}`);
   }
   createNewCatalogTD(newCatalogTD): Observable<any>{
    return this.httpclientCatalogTD.post(CatalogTDApiUrl, newCatalogTD);
  }
  updateCatalogTD(newCatalogTD): Observable<any>{
    return this.httpclientCatalogTD.put(CatalogTDApiUrl, newCatalogTD);
  }
   deleteCatalogTD(deletedId:number ):Observable<any>{
    return this.httpclientCatalogTD.delete(`${CatalogTDApiUrl}/${deletedId}`);
  } 
  getCatalogTDByIdss(): Observable<number[]> {
    return this.getCatalogTDlist()
      .map(catalogTD => {
        return catalogTD.map(catalogTD => catalogTD.id);
      });
  }
  
}