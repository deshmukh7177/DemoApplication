import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-demo-rxjs',
  templateUrl: './demo-rxjs.component.html',
  styleUrls: ['./demo-rxjs.component.css']
})
export class DemoRxjsComponent implements OnInit,OnDestroy{

intervalSubscription:Subscription|any
customObsSubscription:Subscription|any
customSubYD:Subscription|any
  constructor() { }

  ngOnInit(): void {

    //RXJS

    // this.intervalSubscription=interval(1000).subscribe((count)=>{
    //   console.log(count)
    // })

    //create custom observable declare

    // let customObs = new Observable<number>(observer=>{
    //   let count =0;
    //   setInterval(()=>{
    //     observer.next(count);
    //     count ++;
    //   },1000)
    // })

    // this.customObsSubscription =customObs.subscribe((data)=>{
    //   console.log(data)
    // })


    //define observable
    let customObs =new Observable<number>(observer=>{
      let count =0;
      setInterval(()=>{
        observer.next(count);
        if(count>3){
          observer.error(count)
        }
        if(count>2){
          observer.complete()

        }
        count ++;
      },1000)

    })

    //calling observable

    this.customSubYD =customObs.subscribe((data)=>{
      console.log("Count is " +data)
    },error=>{
      console.log("error...")
    },()=>{
      console.log("Complete the process..")
    })

    this.customSubYD=customObs.pipe(map(data =>{
      return "count is as per show in console " +(data+10)

    })).subscribe((data:any)=>{
      console.log(data);
    },error=>{
      console.log(error);
    },()=>{
      console.log("Complete the process..")
    })
    



  }

  ngOnDestroy(){
    this.intervalSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe();
    this.customSubYD.unsubscribe()

  }

}
