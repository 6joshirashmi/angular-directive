import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouse]',
  standalone: true
})
export class MouseDirective {

  constructor() { }

@HostBinding('style.backgroundColor') bgcolor='red';
@HostListener('mouseenter') onMouseEnter(){
  this.bgcolor='green';
}

@HostListener('mouseleave') onMouseLeave(){
  this.bgcolor='yellow';
}

}
