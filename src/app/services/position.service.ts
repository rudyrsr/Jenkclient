import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  httpHeader = new HttpHeaders({'ContentType':'application/json'});

  constructor(private Positionhttp: HttpClient) { }

  getPositions(): Observable<any>
  {
    return this.Positionhttp.get(baseURL + 'positions')
    .map((res) => {
      return res;
    }); 
  }
  getPositionById(id:number): Observable<any>
  {
    return this.Positionhttp.get(baseURL + 'positions/' + id)
    .map(res => {
      return res;
    });
  }
  deletePosition(id:number): Observable<any>
  {
    return this.Positionhttp.delete(baseURL + 'positions/' + id)
    .map(res =>
    {
      return res;
    });
   }

   addPosition(position): Observable<any>
   {
     return this.Positionhttp.post(baseURL + 'positions/', position)
     .map(res =>
    {
      return res;
    });
   }
   
   updatePosition(editPosition, positionId: number): Observable<any>{
    return this.Positionhttp.put(baseURL + 'positions/' +positionId, editPosition);
   }

}
