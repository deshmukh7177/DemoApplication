import { Component, OnInit } from '@angular/core';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { Observable } from "rxjs";
import { EmployeeService } from 'src/app/service/employee.service';
// import {Employee} from '../../employee';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {



  employees:any;

  constructor(private empser:EmployeeService,private router:Router) { }


  ngOnInit(): void {
    this.reloadData()
  }

  reloadData(){

   this.empser.getEmployeesList().subscribe((data)=>{
    console.log(data);
    this.employees=data;
  })
}

deleteEmployee(id:number){
  this.empser.deleteEmployeedata(id).subscribe((data)=>{
    console.log(data);
    this.reloadData();
  })

}

employeeDetails(id:number){

}

}
