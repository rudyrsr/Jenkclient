import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {baseURL} from '../shared/baseurl';
import {CatalogUC} from '../shared/catalogUC';

const CatalogUCApiUrl='http://localhost:8080/catalogUC';

@Injectable({
  providedIn: 'root'
})
export class CatalogUCService {
  constructor( private httpclientCatalogUC: HttpClient) { 
  }
  getCatalogUClist():Observable<any>{
    return this.httpclientCatalogUC.get(CatalogUCApiUrl);
  }
  getCatalogUCById(id:number):Observable<any>{
    return this.httpclientCatalogUC.get(`${CatalogUCApiUrl}/${id}`);
   }
   createNewCatalogUC(newCatalogUC): Observable<any>{
    return this.httpclientCatalogUC.post(CatalogUCApiUrl, newCatalogUC);
  }
  updateCatalogUC(newCatalogUC): Observable<any>{
    return this.httpclientCatalogUC.put(CatalogUCApiUrl, newCatalogUC);
  }
   deleteCatalogUC(deletedId:number ):Observable<any>{
    return this.httpclientCatalogUC.delete(`${CatalogUCApiUrl}/${deletedId}`);
  }
  getCatalogUCByIdss(): Observable<number[]> {
    return this.getCatalogUClist()
      .map(catalogUC => {
        return catalogUC.map(catalogUC => catalogUC.id);
      });
  } 
  
}