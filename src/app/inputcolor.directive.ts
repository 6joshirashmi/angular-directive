import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[Inputcolor]',
  standalone: true
})
export class InputcolorDirective implements OnInit{
  @Input() color!:string;
  
    constructor(private el:ElementRef) { }
    ngOnInit(): void {
      this.el.nativeElement.style.backgroundColor=this.color;
      this.el.nativeElement.style.height="100px";
      this.el.nativeElement.style.width="100px";
      this.el.nativeElement.style.padding="10px";
      this.el.nativeElement.style.border="1px solid #ddd"; 
      this.el.nativeElement.style.borderRadius="40px";   
   
    
    }
  }