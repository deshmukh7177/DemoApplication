import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecyclecomp',
  templateUrl: './lifecyclecomp.component.html',
  styleUrls: ['./lifecyclecomp.component.css']
})
export class LifecyclecompComponent implements OnInit{

  constructor() { 

   // console.log("constructor called...")
  }

  ngOnInit(): void {
   // console.log("ngOnInit called...")
  }


  // ngOnChanges(element:SimpleChanges){
  //   console.log("ngOnChanges called...");
  //   console.log(element)
  // }

}
