import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {LogserviceService} from './logservice.service'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private baseUrl = 'http://localhost:4000/users';

  private anotherbaseurl = 'http://localhost:4000/user'

  constructor(private http:HttpClient,private YD:LogserviceService) {

   }
   getEmployeesList():Observable<any>{
     this.YD.logStatus()

    return this.http.get(`${this.baseUrl}`)
   }


   deleteEmployeedata(id: number): Observable<any> {
    return this.http.delete(`${this.anotherbaseurl}/${id}`, { responseType: 'text' });
  }


  }
