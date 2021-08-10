import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { baseURL } from '../shared/baseurl';
import { FunctionManual } from '../shared/FunctionManual';

@Injectable({
  providedIn: 'root'
})
export class FunctionManualService {

  constructor(private httpManualFunction: HttpClient) { }

  getFunctionManuals(): Observable<any>
  {
    return this.httpManualFunction.get('http://localhost:8080/functionalmanual')
    .map((res) => {
      return res;
    }); 
  }
  getFunctionManualById(id:number): Observable<any>
  {
    return this.httpManualFunction.get(baseURL + 'functionalmanual/' + id)
    .map(res => {
      return res;
    });
  }

  
  deletePosition(id:number): Observable<any>
  {
    return this.httpManualFunction.delete(baseURL + 'functionalmanual/' + id)
    .map(res =>
    {
      return res;
    });
   }

   addFunctionalManual(functionalManual): Observable<any>
   {
     return this.httpManualFunction.post(baseURL + 'functionalmanual/', functionalManual)
     .map(res =>
    {
      return res;
    });
   }
   
   updateFuncManual(editPosition, positionId: number): Observable<any>{
    return this.httpManualFunction.put(baseURL + 'functionalmanual/', editPosition);
   }

}
