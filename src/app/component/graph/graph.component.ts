import { Component, OnInit,ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as mermaid from 'mermaid';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit,AfterViewInit {

  constructor() { }

  config = {
    startOnLoad: true,
    flowchart: {
      useMaxWidth: true,
      htmlLabels: true,
      curve: 'cardinal',
    },
    securityLevel: 'loose',
 };

  @ViewChild('mermaid') mermaid: ElementRef | undefined;

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    console.log("YDYYD")
    //mermaid.init(this.config)

    mermaid.default.initialize(this.config)
  }

}
