import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appAddClass]',
  standalone: true
})
export class AddClassDirective implements OnInit {

  constructor(private el:ElementRef) { }
  ngOnInit(): void {
   
    this.el.nativeElement.classList.add('');

  }

}
