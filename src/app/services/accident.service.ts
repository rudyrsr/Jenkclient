import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Accident} from '../shared/accident';

const AccidentApiUrl='http://127.0.0.1:8080/accident';
const AccidentApiUrlF = 'http://127.0.0.1:8080/accident/find';

@Injectable({
  providedIn: 'root'
})
export class AccidentService {

  constructor(private httpclientAccident: HttpClient) {
  }
  getAccidentlist():Observable<any>{
    return this.httpclientAccident.get(AccidentApiUrl);
  }
  getAccidentById(id: number): Observable<Accident> {
    return this.httpclientAccident.get<Accident>(AccidentApiUrl + '/' + id)
      .map(res => {
        return res;
      });
  }

  getAccidentFindCode(id: String): Observable<Accident> {
    return this.httpclientAccident.get<Accident>(AccidentApiUrlF + '/' + id)
      .map(res => {
        return res;
      });
  }
  deleteAccident(id: number ):Observable<any>{
    console.log('codigo sevicio:',id);
    return this.httpclientAccident.delete( AccidentApiUrl+'/'+id)
    .map(res => {
      return res;
    });
  }

  createNewAccident(newAccident): Observable<any>{
    return this.httpclientAccident.post(AccidentApiUrl, newAccident);
  }

  updateProject(editAccident):Observable<any>{
    return this.httpclientAccident.put(AccidentApiUrl, editAccident);
  }
}
