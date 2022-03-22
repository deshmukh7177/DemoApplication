import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-switchcase',
  templateUrl: './switchcase.component.html',
  styleUrls: ['./switchcase.component.css']
})
export class SwitchcaseComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  myVal=2;
  
  muUserData:{id: number; name: string;} | undefined
   
   


  ngOnInit(): void {


    this.route.params.subscribe((data)=>{
      console.log(data)
    })
  }

}
