import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MachineryCatalog } from '../shared/machineryCatalog';


const machinerCatalogApiUrl='http://localhost:8080/machinerycatalog';

@Injectable({
  providedIn: 'root'
})
export class MachineryCatalogService {

  constructor(private myhttpclient: HttpClient ) { }

  getMachineryCatalogList(): Observable<any>{
    return this.myhttpclient.get(machinerCatalogApiUrl).map((res) => {
      return res;
    }).catch(error => {
      console.log('error: ' + error);
      return error;
    });
  }
  getMachineryCatalogById(id: number): Observable<MachineryCatalog> {
    return this.myhttpclient.get<MachineryCatalog>(machinerCatalogApiUrl + '/' + id)
      .map(res => {
        return res;
      });
  }
  deleteMachineryCatalog(id: number ):Observable<any>{
    return this.myhttpclient.delete( machinerCatalogApiUrl+'/'+id)
    .map(res => {
      return res;
    });
  }
  
  getMachineryCatalogByIdss(): Observable<number[]> {
    return this.getMachineryCatalogList()
      .map(affictions => {
        return affictions.map(affiction => affiction.id);
      });
  }
  createNewMachineryCatalog(newMachinery): Observable<any>{
    return this.myhttpclient.post(machinerCatalogApiUrl, newMachinery);
  }
  
  updateMachineryCatalog(newMachinery): Observable<any>{
    return this.myhttpclient.put(machinerCatalogApiUrl, newMachinery);
  }
  
  
  }

