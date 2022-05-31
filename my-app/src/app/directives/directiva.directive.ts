import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirectiva]'
})
export class DirectivaDirective {

  constructor(private elRef: ElementRef) {
    elRef.nativeElement.style.fontSize = '80px';
  }
}
