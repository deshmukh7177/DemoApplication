import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http :HttpClient) {

   }


   getAllUser(){
   return this.http.get('http://localhost:5001/myuser')
   }
}
