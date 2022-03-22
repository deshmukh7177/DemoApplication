import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,OnChanges,DoCheck{

  //ischild = false

  ischild = true;
  myname = '';
  //Code from child to parent
  channnelNameInParent ="";

  myAddressInParent = ''

  messageFromChild=";"
  constructor() {
    console.log("parent constructor is called... ")
   }

   reciveMessage(msg:any){
    //console.log(msg)
    this.messageFromChild = msg
   }


  ngOnChanges(changes: SimpleChanges): void {
    console.log("parent OnChanges  is called...")
  }


  ngOnInit(): void {

    console.log("parent ngOnInit is called... ")
  }


  

  toggleChild(){
    
    this.ischild=!this.ischild
  }


  ngDoCheck(){
    console.log("parent DoCheck is called... ")
  }
}
