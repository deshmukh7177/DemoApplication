import { AfterContentInit, Component,EventEmitter, ContentChild, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, Output } from '@angular/core';



@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit ,OnDestroy,OnChanges,DoCheck,AfterContentInit{

  counter = 0;
  innterval :any;
  @Input() channnelNameInChild ="";
  @Input() myAddressVar ="";

  @Input()
  myname :any

  // pass data from child to parent 
  @Output()
  sendMessageEmmmiter = new EventEmitter();



  @ContentChild('YDblog_data')YDblog_data:any



  constructor() { 
    console.log("child constructor is called... ");
  }

  passEventBind(e:any){
   // console.log(e.target.value)
   this.sendMessageEmmmiter.emit(e.target.value)

  }
  ngOnInit(): void {
    // this.innterval=setInterval(()=>{
    //   this.counter =this.counter+1;
    //   console.log(this.counter)
     
    // },1000)
   console.log("child ngOnInit is called... ")
   console.log("ngOnInit..."+this.YDblog_data)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("child OnChanges  is called...");
    console.log(changes)
  }

  ngDoCheck(){
    console.log("child DoCheck called...");
    console.log("ngDoCheck..."+this.YDblog_data)
  }
  ngAfterContentInit(){
    console.log("child ngAfterContentInit called...");
    console.log("ngAfterContentInit..."+this.YDblog_data)
  }

   ngOnDestroy(){
     clearInterval(this.innterval)
     console.log("child OnDestroy  is called... ")

   }
}
