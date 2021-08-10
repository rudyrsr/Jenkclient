import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {baseURL} from '../shared/baseurl';
import {CatalogNI} from '../shared/catalogNI';

const CatalogNIApiUrl='http://localhost:8080/catalogNI';

@Injectable({
  providedIn: 'root'
})
export class CatalogNIService {
  constructor( private httpclientCatalogNI: HttpClient) { 
  }
  getCatalogNIlist():Observable<any>{
    return this.httpclientCatalogNI.get(CatalogNIApiUrl);
  }
  getCatalogNIById(id:number):Observable<any>{
    return this.httpclientCatalogNI.get(`${CatalogNIApiUrl}/${id}`);
   }
   createNewCatalogNI(newCatalogNI): Observable<any>{
    return this.httpclientCatalogNI.post(CatalogNIApiUrl, newCatalogNI);
  }
  updateCatalogNI(newCatalogNI): Observable<any>{
    return this.httpclientCatalogNI.put(CatalogNIApiUrl, newCatalogNI);
  }
   deleteCatalogNI(deletedId:number ):Observable<any>{
    return this.httpclientCatalogNI.delete(`${CatalogNIApiUrl}/${deletedId}`);
  }
  getCatalogNIByIdss(): Observable<number[]> {
    return this.getCatalogNIlist()
      .map(catalogNI => {
        return catalogNI.map(catalogNI => catalogNI.id);
      });
  } 
}