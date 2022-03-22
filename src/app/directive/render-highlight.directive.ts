import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appRenderHighlight]'
})
export class RenderHighlightDirective implements OnInit {

  constructor(private element:ElementRef) { 
    (<HTMLElement>this.element.nativeElement).style.backgroundColor='Yellow';

  }


  ngOnInit():void{

  }

}
