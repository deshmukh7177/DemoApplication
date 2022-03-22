import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users =[
    {
    names:'Yogesh deshmukh',
    JoinDate: new Date(1,1,2022)
    },
    {
      names:'Asmita Deshmukh',
      JoinDate:new Date(10,12,2022)
    },
    {
      names:'Pooja Deshmukh',
      JoinDate:new Date(5,12,2022)
    }
    
]

}
