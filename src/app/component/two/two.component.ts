import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  @Input()userName:string |undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
