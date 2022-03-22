import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserserciesService } from 'src/app/service/usersercies.service';

@Component({
  selector: 'app-myuser',
  templateUrl: './myuser.component.html',
  styleUrls: ['./myuser.component.css'],
  providers: [UserserciesService],
  
})
export class MyuserComponent implements OnInit,OnChanges {

name= "Yogesh Deshmukh"

  @Input()user!:{name:string;city:string;mobile:string}

  @Input()id:number | undefined;

  constructor(private userserv:UserserciesService) { 
    console.log("constructor called...")
    
  }

  ngOnInit(): void {
    console.log("ngOnInit called....")
  }


  ngOnChanges(elment:SimpleChanges){
   console.log("ngOnChanges called....");
   console.log(elment)
  }

  

}
