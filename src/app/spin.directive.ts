import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSpin]',
  standalone: true
})
export class SpinDirective {

  constructor() { }
  @HostBinding('class.spin') animate=false
  @HostListener('click') myclick(){
    this.animate=true;
    setTimeout(()=>{
this.animate=false;
    },400);
  }

}
