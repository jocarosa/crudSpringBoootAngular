import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/employees';
  
  constructor(private http: HttpClient) { }

  getEmployeesList(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  deleteEmployee(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType:"text"});
  }

  getEmployeeDetails(id:number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createEmployee(employee:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}`,employee);
  }
  updateEmployee(id:number,employee:Object) : Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`,employee,{responseType:"text"});
  }
  
}
