import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Maintenance } from '../shared/maintenance';



const maintenanceApiUrl='http://localhost:8080/maintenance'

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {

  constructor(private myhttpclient: HttpClient) { }
  getMaintenanceList(): Observable<any>{
    return this.myhttpclient.get(maintenanceApiUrl).map((res) => {
      return res;
    }).catch(error => {
      console.log('error: ' + error);
      return error;
    });
  }
  getMaintenanceById(id: number): Observable<Maintenance> {
    return this.myhttpclient.get<Maintenance>(maintenanceApiUrl + '/' + id)
      .map(res => {
        return res;
      });
  }
  deleteMaintenance(id: number ):Observable<any>{
    return this.myhttpclient.delete( maintenanceApiUrl+'/'+id)
    .map(res => {
      return res;
    });
  }
  
  getMaintenanceByIdss(): Observable<number[]> {
    return this.getMaintenanceList()
      .map(maintenance => {
        return maintenance.map(maintenance => maintenance.id);
      });
    }
     
  createNewMaintenance(newMaintenance): Observable<any>{
    return this.myhttpclient.post(maintenanceApiUrl, newMaintenance);
  }
  
  updateMaintenance(upadateMaintenance): Observable<any>{
    return this.myhttpclient.put(maintenanceApiUrl, upadateMaintenance);
  }
  }