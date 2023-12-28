import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css',
})
export class HijoComponent {
  @Output() incremento = new EventEmitter<void>();
  @Output() decremento = new EventEmitter<void>();

  incrementoMeth() {
    this.incremento.emit();
  }
  decrementoMeth() {
    this.decremento.emit();
  }
}
