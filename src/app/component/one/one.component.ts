import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  constructor() { }

  userName:string="";
  userList=[''];

  onUseradded(){
    this.userList.push(this.userName);

  }

  ngOnInit(): void {
  }

}
