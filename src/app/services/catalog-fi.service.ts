import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {baseURL} from '../shared/baseurl';
import {CatalogFI} from '../shared/catalogFI';

const CatalogFIApiUrl='http://localhost:8080/catalogFI';

@Injectable({
  providedIn: 'root'
})
export class CatalogFIService {

  constructor( private httpclientCatalogFI: HttpClient) { 
  }
  getCatalogFIlist():Observable<any>{
    return this.httpclientCatalogFI.get(CatalogFIApiUrl);
  }
   getCatalogFIById(id:number):Observable<any>{
    return this.httpclientCatalogFI.get(`${CatalogFIApiUrl}/${id}`);
   }
   createNewCatalogFI(newCatalogFI): Observable<any>{
    return this.httpclientCatalogFI.post(CatalogFIApiUrl, newCatalogFI);
  }
  updateCatalogFI(newCatalogFI): Observable<any>{
    return this.httpclientCatalogFI.put(CatalogFIApiUrl, newCatalogFI);
  }
  deleteCatalogFI(deletedId:number ):Observable<any>{
    return this.httpclientCatalogFI.delete(`${CatalogFIApiUrl}/${deletedId}`);
  } 
  getCatalogFIByIdss(): Observable<number[]> {
    return this.getCatalogFIlist()
      .map(catalogFI => {
        return catalogFI.map(catalogFI => catalogFI.id);
      });
  }
  
}
