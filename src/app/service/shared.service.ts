import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  calculate(firstNum :any,secondNum:any){
    return firstNum + secondNum

  }
}
