import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomd]',
  standalone: true,  
})
export class CustomdDirective  implements OnInit{
  @Input() color!:string;
  constructor(private el:ElementRef) { }
  ngOnInit(): void {
   
    this.el.nativeElement.style.backgroundColor="yellow";
    this.el.nativeElement.style.height="200px";
    this.el.nativeElement.style.width="200px";
    this.el.nativeElement.style.padding="10px";
    this.el.nativeElement.style.border="1px solid #ddd"; 
    this.el.nativeElement.style.borderRadius="10px";   
  }

}
