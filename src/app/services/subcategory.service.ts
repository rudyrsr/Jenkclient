import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {baseURL} from '../shared/baseurl';
import {Subcategory} from '../shared/subcategory';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  constructor(private http: HttpClient) {
  }

  getSubcategories(): Observable<any> {
    return this.http.get(baseURL + 'subcategories').map((res) => {
      return res;
    });
  }

  getSubcategory(id: number): Observable<Subcategory> {
    return this.http.get<Subcategory>(baseURL + 'subcategories/' + id).map(res => {
      return res;
    });
  }

  postSubcategory(subcategory): Observable<any> {
    return this.http.post<any>(baseURL + 'subcategories', subcategory);
  }

  putSubcategory(subcategory): Observable<any> {
    return this.http.put<any>(baseURL + 'subcategories', subcategory).map(res => {
      return res;
    });
  }

  deleteSubcategory(id: number): Observable<Subcategory> {
    return this.http.delete<Subcategory>(baseURL + 'subcategories/' + id).map(res => {
      return res;
    });
  }
}
