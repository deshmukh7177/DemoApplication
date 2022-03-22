import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-from',
  templateUrl: './template-driven-from.component.html',
  styleUrls: ['./template-driven-from.component.css']
})
export class TemplateDrivenFromComponent implements OnInit {

  constructor() { }



  @ViewChild('f')sigunpForm:NgForm | undefined;
  

  submited=false;

  userformData={
    username:'',
    email:'',
    about:''
  }

  aboutMessage:string|any
  ngOnInit(): void {
  }
  onFromSubmit(){
   console.log(this.sigunpForm)
   this.submited=true;
   this.userformData.username=this.sigunpForm?.value.userImpData.username;
   this.userformData.email=this.sigunpForm?.value.userImpData.email;
   this.userformData.about=this.sigunpForm?.value.userImpData.about;
   this.sigunpForm?.reset()


  }
  // onFromSubmit(f:NgForm){

  //   console.log(f)

  // }

  FillFormData(){

    //using set value setValue Fill all forms detalis
      // this.sigunpForm?.form.setValue({
      //   userImpData:{
      //     username:'Yogesh Deshmukh',
      //     email:'deshmukh.7177@gmail.com',
      //     about:'lorem lorem lorem lorem'

      //   }
      // })

      //using patch value

      this.sigunpForm?.form.patchValue({
        userImpData:{
          username:'Deshmukh.7177@gmail.com',
          email:'deshmukh.7177@gmail.com'

        }
      })
  }

}
