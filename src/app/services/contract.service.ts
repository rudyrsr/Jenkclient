import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private httpContract:HttpClient) { }

  getContracts():Observable<any>
  {
    return this.httpContract.get(baseURL + 'contracts').
      map((res)=>{
        return res;
      });
  }
  getContractById(id: number):Observable<any>
  {
    return this.httpContract.get(baseURL + 'contracts/' + id)
      .map((res)=>{
        return res;
    });
  }
  deletePosition(id:number): Observable<any>
  {
    return this.httpContract.delete(baseURL + 'contracts/' + id)
    .map(res =>
    {
      return res;
    });
   }
   addContract(contract):Observable<any>
   {
     return this.httpContract.post(baseURL + 'contracts', contract)
     .map(
        res =>
        {
          return res;
        });
   }
   updateContract(contract, contractid:number):Observable<any>
   {
     return this.httpContract.put(baseURL + 'contracts/'+ contractid, contract)
     .map(
       res =>
       {
         return res;
       });
   }
}
