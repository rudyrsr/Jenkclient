import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Item} from '../shared/item';
import {baseURL} from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class ImageItemService {

  constructor(private http: HttpClient) {
  }

  saveImage(id: number, item: Item): Observable<Item> {
    return this.http.put<Item>(baseURL + 'items/' + id + '/image', item).map(res => {
      return res;
    });
  }
}
