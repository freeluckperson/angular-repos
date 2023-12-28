import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css',
})
export class PadreComponent implements OnInit {
  nombre?: string;
  fecha: Date = new Date();
  dolar: number = 35.7;

  constructor(private _servicioFamiliar: ServicioFamiliarService) {}

  ngOnInit(): void {
    this._servicioFamiliar.setHermanoGrande('Juanchon');
    this.nombre = this._servicioFamiliar.getHermanoGrande();
  }
  saludar() {
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoPequeño());
  }

  preguntar() {
    console.log(this._servicioFamiliar.preguntarPorHijo());
  }

  contador: number = 0;
  incremento() {
    this.contador++;
  }
  decremento() {
    this.contador--;
  }
}
