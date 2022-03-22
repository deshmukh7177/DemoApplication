import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostlistener]'
})
export class HostlistenerDirective  implements OnInit{

  constructor(private element:ElementRef,private render:Renderer2) { }

  ngOnInit(){

  }

//on mouse over..
  @HostListener('mouseover')onMouseOver(event:Event){
        this.render.setStyle(
          this.element.nativeElement,'background-color','red'
        )
  }
// on mouseleave over..
  @HostListener('mouseleave')onMouseLeave(event:Event){
    this.render.setStyle(
      this.element.nativeElement,'background-color','yellow'
    )

  }

  @HostListener('click')onClick(event:Event){
    this.render.setStyle(
      this.element.nativeElement,'background-color','black'
    )
  }
}
