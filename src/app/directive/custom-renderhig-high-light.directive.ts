import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomRenderhigHighLight]'
})
export class CustomRenderhigHighLightDirective  implements OnInit{


  @Input() defaultColor='red';
  @Input() myColor='pink';
  // color: string |undefined;
    

  

  constructor() { }

  ngOnInit(){

  }

  @HostListener('mouseover')onMouseOver(event:Event){
    this.color=this.defaultColor ;
  }
@HostBinding('style.backgroundColor')color:string|undefined;
@HostBinding('style.border')border:string|undefined;

@HostListener('mouseleave')onMouseLeave(event:Event){
this.color=this.myColor
}


}
