import {Injectable} from '@angular/core';
import {Item} from '../shared/item';

import {baseURL} from '../shared/baseurl';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ItemService {

  constructor(private http: HttpClient) {
  }

  getItems(): Observable<any> {
    return this.http.get(baseURL + 'items')
      .map((res) => {
        return res;
      });
  }

  getItem(id: number): Observable<Item> {
    return this.http.get<Item>(baseURL + 'items/' + id)
      .map(res => {
        return res;
      });
  }

  getFeaturedItem(): Observable<Item> {
    return this.http.get<Item>(baseURL + 'items?featured=true')
      .map(res => {
        return res[0];
      });
  }

  getItemIds(): Observable<number[]> {
    return this.getItems()
      .map(items => {
        return items.map(item => item.id);
      });
  }

  // aniadiendo el metodo post
  postItem(item): Observable<any> {
    return this.http.post<any>(baseURL + 'items', item);
  }

  // aniadiendo el metodo put
  putItem(item): Observable<any> {
    return this.http.put<any>(baseURL + 'items', item).map(res => {
      return res;
    });
  }

  // aniadiendo el metodo delete
  deleteItemId(id: number): Observable<Item> {
    return this.http.delete<Item>(baseURL + 'items/' + id).map(res => {
      return res;
    });
  }

}
