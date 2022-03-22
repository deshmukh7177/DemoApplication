import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserserciesService } from 'src/app/service/usersercies.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UserserciesService]

})
export class UserComponent implements OnInit{


  UserId= 1000;
  userStatus ="OffLine";

  userCreated = "No User created..."

  allowUse= false;
  isuserCreated= false;

  username:any;
  myFullname="Yogesh Deshmukh..";


  getUserStatus(){
    return this.userStatus
  }


  constructor(private userser :UserserciesService){
    setTimeout(()=>{
      this.allowUse = true
    },3000)

  }

  changeUserStatus(){
    console.log("YDYDYD...")
    this.userCreated ="User created...";
  }

  onUpdateuser(event:any)
  {

  this.username= event.target.value;
  }


  showUsername(){
    this.isuserCreated=true

  }


  addMyName(myInput:any){
    console.log(myInput.value)
  }
  ngOnInit(){

  }

  onUserClick(){
    this.userser.adduserYD()
  
  }
}