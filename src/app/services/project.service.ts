import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Project } from '../shared/project';

const projectApiUrl= 'http://localhost:8080/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private myhttpclient: HttpClient
  ) { }

  getPorjectList(): Observable<any>{
    return this.myhttpclient.get(projectApiUrl).map((res) => {
      return res;
    }).catch(error => {
      console.log('error: ' + error);
      return error;
    });
  }

  getPorjectById(id: number): Observable<Project> {
    return this.myhttpclient.get<Project>(projectApiUrl + '/' + id)
      .map(res => {
        return res;
      });
  }
  deletePorject(id: number ):Observable<any>{
    return this.myhttpclient.delete( projectApiUrl+'/'+id)
    .map(res => {
      return res;
    });
  }

  createNewProject(newProject): Observable<any>{
    return this.myhttpclient.post(projectApiUrl, newProject);
  }

  updateProject(editProject):Observable<any>{
    return this.myhttpclient.put(projectApiUrl, editProject);
  }
}
