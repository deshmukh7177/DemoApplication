import { Injectable,EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserciesService {

  statusUpdated= new EventEmitter<boolean>();

  adduserYD(){
  this.statusUpdated.emit(true);
  }

  user:any=[
    {name:"Yogesh Deshmukh" ,city:"pune",mobile:"7709991574"},
    {name:"Asmita Deshmukh" ,city:"pune",mobile:"9890426155"},
    {name:"Arayahi Deshmukh" ,city:"pune",mobile:"565656565"},
    {name:"Pooaj Deshmukh" ,city:"pune",mobile:"23232323232"},
  ]
  

  constructor() { }

  addUser(name:string,city:string){
    this.user.push(name,city)
  }

  updateUser(id:number,name:string,city:string,mobile:string){
    this.user[id].city=city
    
  }
}
