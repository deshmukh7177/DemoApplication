import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  productName="";

  ngOnInit(): void {

    this.productName= this.route.snapshot.params['id']
  }

}
