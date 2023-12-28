import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEstilosHermanos]',
})
export class EstilosHermanosDirective {
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'khaki';
  }
}
