import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  userID:number=10;
  userStatus:string | undefined;


  constructor(private router:Router) { 

    this.userStatus=Math.random()>0.5?'online':'offline';
  }

  getColour(){
    if(this.userStatus==='online'){
      return  'green'
    }
    return 'red'
  }

  showUserStatus(){
    return this.userStatus
  }

  clickMe(){

    this.router.navigateByUrl('/showapidata');

  }

  ngOnInit(): void {
  }

}
