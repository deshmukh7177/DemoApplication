import { Component, OnInit } from '@angular/core';
import { UserserciesService } from './service/usersercies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'revsionAngular';

  userButtonShow:boolean =false;
  constructor(private YD:UserserciesService){

  }

  ngOnInit(){
    this.YD.statusUpdated.subscribe(data=>{
      console.log(data);
      this.userButtonShow =data
    })

  }
}
