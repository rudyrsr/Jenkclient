import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Affliction } from '../shared/affliction';

const afflictionApiUrl= 'http://localhost:8080/afflictions';

@Injectable({
  providedIn: 'root'
})
export class AfflictionService {

  constructor(
    private myhttpclient: HttpClient
  ) { }

getAfflictionsList(): Observable<any>{
  return this.myhttpclient.get(afflictionApiUrl).map((res) => {
    return res;
  }).catch(error => {
    console.log('error: ' + error);
    return error;
  });
}

getAfflictionById(id: number): Observable<any> {
  return this.myhttpclient.get(afflictionApiUrl + '/' + id)
    .map(res => {
      return res;
    });
}
deleteAffliction(id: number ):Observable<any>{
  return this.myhttpclient.delete( afflictionApiUrl+'/'+id)
  .map(res => {
    return res;
  });
}
createNewAffliction(newAffliction): Observable<any>{
  return this.myhttpclient.post(afflictionApiUrl, newAffliction);
}
updateAffliction(editAffliction):Observable<any>{
  return this.myhttpclient.put(afflictionApiUrl, editAffliction);
}

}
