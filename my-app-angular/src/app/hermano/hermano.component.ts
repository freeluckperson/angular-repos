import { Component, OnInit, inject } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-hermano',
  templateUrl: './hermano.component.html',
  styleUrl: './hermano.component.css',
})
export class HermanoComponent implements OnInit {
  nombre?: string;

  //1ra forma de inyectar
  constructor(private _servicioFamiliar: ServicioFamiliarService) {}
  //2da forma de inyectar
  private _servicioFamiliar2 = inject(ServicioFamiliarService);

  ngOnInit(): void {
    this._servicioFamiliar2.setHermanoPequeño('jose');
    this.nombre = this._servicioFamiliar2.getHermanoPequeño();
  }
  saludar() {
    this._servicioFamiliar2.saludar(this._servicioFamiliar2.getHermanoGrande());
  }

  preguntar() {
    console.log(this._servicioFamiliar2.preguntarPorHijo());
  }
}
