import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { AfflictionCatalog } from '../shared/afflictionCatalog';


const afflictionCatalogApiUrl= 'http://localhost:8080/afflictionCatalogs';
@Injectable({
  providedIn: 'root'
})
export class AffictionCatalogService {

  constructor(
    private myhttpclient: HttpClient
  ) { }


  getAfflictionsCatalogList(): Observable<any>{
    return this.myhttpclient.get(afflictionCatalogApiUrl).map((res) => {
      return res;
    }).catch(error => {
      console.log('error: ' + error);
      return error;
    });
  }
  getAfflictionCatalogById(id: number): Observable<AfflictionCatalog> {
    return this.myhttpclient.get<AfflictionCatalog>(afflictionCatalogApiUrl + '/' + id)
      .map(res => {
        return res;
      });
  }
  deleteCatalogAffliction(id: number ):Observable<any>{
    return this.myhttpclient.delete( afflictionCatalogApiUrl+'/'+id)
    .map(res => {
      return res;
    });
  }

  createNewCatalogAffliction(newCatalalogAffli): Observable<any>{
    return this.myhttpclient.post(afflictionCatalogApiUrl, newCatalalogAffli);
  }

  updateCatalogAffliction(editCatalog):Observable<any>{
    return this.myhttpclient.put(afflictionCatalogApiUrl, editCatalog);
  }
}
