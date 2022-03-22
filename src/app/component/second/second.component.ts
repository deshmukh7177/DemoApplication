import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private router:Router) { }

@ViewChild('myName',{static:true}) myCustomInput:any

  ngOnInit(): void {
 this.myCustomInput.nativeElement.Focus();
  console.log(this.myCustomInput)
  }


  sendInputVal(input:any,myemail:any,textarea:any){
    console.log(input.value)
    console.log(myemail.innerText)
     console.log("textarea" + textarea.value)


  }

  changePath(){
    console.log("Connect to data base ....");
    setTimeout(()=>{
     console.log("ydydy..")
     this.router.navigate(['first'])
    },2000);


  }
}
