import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogserviceService {

  constructor() { }

  logStatus(){
    console.log("Login to console log...")
  }
}
