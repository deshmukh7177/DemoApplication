import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs'


@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

  constructor() { }

  userprofileForm:FormGroup|any;

  gender=['Male','Female']
  get hobbiesControls(){
    return (<FormArray>this.userprofileForm.get('hobbies')).controls;
    }

  ngOnInit(): void {


    // this.userprofileForm= new FormGroup({
    //   'username':new FormControl(null,Validators.required),
    //   'email':new FormControl(null,Validators.required),
    //   'mobile':new FormControl(null,Validators.required),

    // })

    //Grouping controls...


    // this.singnFrom =new  FormGroup({

    //   //Grouping the Controls
    //   'userData' : new  FormGroup({
    //     'email' :  new FormControl (null,[Validators.required,Validators.email]),
    //     'username' :  new FormControl (null,Validators.required),
    //   }),
   
    //   'gender' :  new FormControl (null),
    //   'hobbies': new FormArray([]) //decalare form array name 
    // });

    this.userprofileForm= new FormGroup({
      'userData':new FormGroup({
          'username':new FormControl(null,Validators.required),
          'email':new FormControl(null,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"))
      }),
      'mobile':new FormControl(null,Validators.required),
      'gender':new FormControl('Male'),
      'hobbies':new FormArray([])
    })




    this.userprofileForm.statusChanges.subscribe((val:any)=>{
        console.log(val)
    })

    //value changes for input box

    this.userprofileForm.valueChanges.subscribe((val:any)=>{
      console.log(val)
    })
//setValue
    // this.userprofileForm.setValue({
    //   'userData':{
    //     username :'deshmukh.7177',
    //     email :'deshmukh.7177@gmail.com'
    //   },
    //   mobile:'9090909',
    //   gender:'female',
    //   hobbies:[]
    // })

    //patch value
    this.userprofileForm.patchValue({
      'userData':{
        username :'deshmukh.7177',
      },
      mobile:'7709991574'
    })

  }

  //status cheeck for form



//onSubmit
  onSubmit(){
     console.log(this.userprofileForm)
   
  }

  onHobby(){

    const control = new FormControl(null,Validators.required);
    (<FormArray>this.userprofileForm.get('hobbies')).push(control);

  }
}
