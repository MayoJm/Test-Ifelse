import { Component, OnInit } from '@angular/core';
import { PrimosCicularesServicio } from '../servicio/primos-servicio';
import { encontrarPrimosCirculares, generarPrimos, esPrimoCircular } from '../utilidad/primos';
@Component({
  selector: 'app-lista-primos',
  templateUrl: './lista-primos.component.html',
  styleUrls: ['./lista-primos.component.css']
})
export class ListaPrimosComponent {
  primos: number[] = [];
  idCreado: number | null = null;

  constructor(private primosServicio: PrimosCicularesServicio) { }

  cargarPrimosPorID(id: number) {
    this.primosServicio.obtenerPrimosPorID(id).subscribe(
      data => {
        this.primos = data.desarrollo.split(', ').map(Number);
      },
      error => {
        console.error('Error al obtener los primos circulares', error);
      }
    );
  }

  enviarPrimos() {
    const primosCirculares = encontrarPrimosCirculares(1000000);
    this.primosServicio.enviarPrimosCirculares(primosCirculares).subscribe(response => {
      this.idCreado = response.ID
      console.log('Objeto creado con ID: ', this.idCreado);
      console.log('Primos enviados a la API:', response);
      this.cargarPrimosPorID(this.idCreado);
    },
      error => {
        console.error('Error al enviar los primos circulares', error);
      }
    );
  }
}
