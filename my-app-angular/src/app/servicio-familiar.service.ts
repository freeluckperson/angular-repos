import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicioFamiliarService {
  hermanoGrande?: string;
  hermanoPequeño?: string;

  getHermanoGrande() {
    return this.hermanoGrande || '';
  }

  setHermanoGrande(hermano: string) {
    this.hermanoGrande = hermano;
  }

  getHermanoPequeño() {
    return this.hermanoPequeño || '';
  }

  setHermanoPequeño(hermano: string) {
    this.hermanoPequeño = hermano;
  }

  saludar(hermano: string) {
    console.log(`Hola ${hermano}`);
  }

  preguntarPorHijo(): string {
    return `¿Como esta tu hijo?`;
  }

  constructor() {}
}
