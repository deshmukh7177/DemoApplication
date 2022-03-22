import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  myUser:{id:number,name:string}|any


  constructor(private router:Router,private route:ActivatedRoute) {

   }

  ngOnInit(): void {

//RXJS
    interval(1000).subscribe((count)=>{
      console.log(count)
    })
      // this.myUser={
      //   id:this.route.snapshot.params['id'],
      //   name:this.route.snapshot.params['name']
      // }
//queryParamMap
      this.route.queryParamMap.subscribe((data)=>{
        console.log("queryParamMap")
        console.log(data);
        // this.myQueryparam={
        //   page:data['id'],
        //   search:data['search']
        // }
        
      })

    this.route.params.subscribe((data)=>{
      console.log(data);
      this.myUser={
        id:data['id'],
        name:data['name']
        
      }
      
    })
  }

}
