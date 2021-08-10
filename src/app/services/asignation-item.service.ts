import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {baseURL} from '../shared/baseurl';
import {AsignationItem} from '../shared/asignationItem';

@Injectable({
  providedIn: 'root'
})
export class AsignationItemService {

  constructor(private http: HttpClient) {
  }

  getAsignationItems(): Observable<any> {
    return this.http.get(baseURL + 'itemAsignation').map((res) => {
      return res;
    });
  }

  getAsignationItem(id: number): Observable<any> {
    return this.http.get<any>(baseURL + 'itemAsignation/' + id).map(res => {
      return res;
    });
  }

  postAsignationItem(itemAsignation): Observable<any> {
    return this.http.post<any>(baseURL + 'itemAsignation', itemAsignation);
  }

  putAsignationItem(itemAsignation): Observable<any> {
    return this.http.put<any>(baseURL + 'itemAsignation', itemAsignation).map(res => {
      return res;
    });
  }

  deleteAsignationItem(id: number): Observable<AsignationItem> {
    return this.http.delete<AsignationItem>(baseURL + 'itemAsignation/' + id).map(res => {
      return res;
    });
  }
}
