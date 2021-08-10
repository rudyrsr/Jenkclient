import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AsignationMachinery } from '../shared/asignationMachinery';


const asignationMachineryApiUrl= 'http://localhost:8080/MachineryAssignation';

@Injectable({
  providedIn: 'root'
})
export class AsignationMachineryService {

  constructor(private myhttpclient: HttpClient) { }
  getAsigantionList(): Observable<any>{
    return this.myhttpclient.get(asignationMachineryApiUrl).map((res) => {
      return res;
    }).catch(error => {
      console.log('error: ' + error);
      return error;
    });
  
}

getAsigantionById(id: number): Observable<AsignationMachinery> {
  return this.myhttpclient.get<AsignationMachinery>(asignationMachineryApiUrl + '/' + id)
    .map(res => {
      return res;
    });
}
deleteAsigantion(id: number ):Observable<any>{
  return this.myhttpclient.delete( asignationMachineryApiUrl+'/'+id)
  .map(res => {
    return res;
  });
}

geAsigantionByIdss(): Observable<number[]> {
  return this.getAsigantionList()
    .map(asignationMachinery => {
      return asignationMachinery.map(asignationMachinery => asignationMachinery.id);
    });
}

createNewAsignation(newAsignation): Observable<any>{
  return this.myhttpclient.post(asignationMachineryApiUrl, newAsignation);
}

updateAsignation(editAsignation): Observable<AsignationMachinery>{
  return this.myhttpclient.put<AsignationMachinery>(asignationMachineryApiUrl, editAsignation);
}

}