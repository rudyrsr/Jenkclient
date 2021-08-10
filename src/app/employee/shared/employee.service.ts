import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../../shared/employee';

import { Observable } from 'rxjs';

const employeesURL = 'http://localhost:8080/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpCLient: HttpClient) { }

  public getAll(): Observable<Employee[]> {
    return this.httpCLient.get<Employee[]>(employeesURL);
  }

  public get(id: string | number): Observable<Employee> {
    return this.httpCLient.get<Employee>(`${employeesURL}/${id}`);
  }

  public update(employee: Employee): Observable<Employee> {
    return this.httpCLient.put<Employee>(`${employeesURL}/${employee.id}`, employee);
  }

  public add(employee: Employee): Observable<Employee> {
    return this.httpCLient.post<Employee>(`${employeesURL}`, employee);
  }

  public delete(id: string | number): Observable<Employee> {
    return this.httpCLient.delete<Employee>(`${employeesURL}/${id}`);
  }
}
