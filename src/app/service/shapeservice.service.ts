import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShapeserviceService {

  constructor() { }

  getClassName(shape:any, color:any){
    console.log("shape" +shape)

    return shape + '-' + color;

    
  }
}
