import { Component, OnInit } from '@angular/core';
import {RestapiService} from '../../service/restapi.service';

@Component({
  selector: 'app-show-api-data',
  templateUrl: './show-api-data.component.html',
  styleUrls: ['./show-api-data.component.css']
})
export class ShowApiDataComponent implements OnInit {
  ShowAllUserData:any;
  constructor(private api:RestapiService) { }



  ngOnInit(): void {

    this.api.getAllUser().subscribe((data)=>{
      console.log(data);
      // this.ShowAllUserData = data;
      this.ShowAllUserData =data;
    })
  }

}
