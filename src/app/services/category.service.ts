import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {baseURL} from '../shared/baseurl';
import {Category} from '../shared/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<any> {
    return this.http.get(baseURL + 'categories').map((res) => {
      return res;
    });
  }

  getCategory(id: number): Observable<any> {
    return this.http.get<any>(baseURL + 'categories/' + id).map(res => {
      return res;
    });
  }

  postCategory(category): Observable<any> {
    return this.http.post<any>(baseURL + 'categories', category);
  }

  putCategory(category): Observable<any> {
    return this.http.put<any>(baseURL + 'categories', category).map(res => {
      return res;
    });
  }

  deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>(baseURL + 'categories/' + id).map(res => {
      return res;
    });
  }
}
