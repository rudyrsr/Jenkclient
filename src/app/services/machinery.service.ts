import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Machinery } from '../shared/machinery';


const machineryApiUrl= 'http://localhost:8080/machinery';
const machineryRApiUrlRm='http://localhost:8080/machinery/ms';
const machineryRApiUrlRms='http://localhost:8080/machinery/mss';
const machineryRApiUrlRy='http://localhost:8080//machinery/an';


@Injectable({
  providedIn: 'root'
})
export class MachineryService {
   constructor(private myhttpclient: HttpClient
  ) { }
  getMachineryList(): Observable<any>{
    return this.myhttpclient.get(machineryApiUrl).map((res) => {
      return res;
    }).catch(error => {
      console.log('error: ' + error);
      return error;
    });
  }
  
  getMachineryById(id: number): Observable<Machinery> {
    return this.myhttpclient.get<Machinery>(machineryApiUrl + '/' + id)
      .map(res => {
        return res;
      });
  }
  deleteMachinery(id: number ):Observable<any>{
    return this.myhttpclient.delete( machineryApiUrl+'/'+id)
    .map(res => {
      return res;
    });
  }
  
  getMachineryByIdss(): Observable<number[]> {
    return this.getMachineryList()
      .map(machinery => {
        return machinery.map(machinery => machinery.id);
      });
  }
  
  createNewMachinery(newMachinery): Observable<any>{
    return this.myhttpclient.post(machineryApiUrl, newMachinery);
  }
  
  updateMachinery(newMachinery): Observable<any>{
    return this.myhttpclient.put(machineryApiUrl, newMachinery);
  }
  getMounths():Observable<any>{
    return this.myhttpclient.get(machineryRApiUrlRms);
  }
  getMAchineryMes(id:number):Observable<any>{
    return this.myhttpclient.get(`${machineryRApiUrlRm}/${id}`);
  }
  getMachineryAnio(id:number):Observable<any>{
    return this.myhttpclient.get(`${machineryRApiUrlRy}/${id}`);
  }
}
