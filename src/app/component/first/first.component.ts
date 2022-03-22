import { Component, OnInit } from '@angular/core';
import { ShapeserviceService } from 'src/app/service/shapeservice.service';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private myshareServcies:SharedService,private shapesService :ShapeserviceService) { }

  firstNum="10";
  secondNum="20"
  outPut="";
  name="PUNE"


  shape = '';
  color = '';
  shapeClass = '';

  ngOnInit(): void {

  }

  showresult(){

   // let shareServcies = new SharedService;
    this.outPut = this.myshareServcies.calculate(this.firstNum,this.secondNum);
    console.log("===========>"+this.outPut)

  }

  // drawShape() {
  //   this.shapeClass = this.shapesService.getClassName(this.shape, this.color);
  // }

  drawShape(){
    this.shapeClass=this.shapesService.getClassName(this.shape, this.color)
  }

}
