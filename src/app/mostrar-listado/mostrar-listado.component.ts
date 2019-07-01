import { Component, OnInit } from '@angular/core';
import listado from '../datos';

@Component({
  selector: 'app-mostrar-listado',
  templateUrl: './mostrar-listado.component.html',
  styleUrls: ['./mostrar-listado.component.scss']
})
export class MostrarListadoComponent implements OnInit {
  personas = [];

  constructor() { }

  ngOnInit() {
    const listadoAgrupado = listado.reduce((m, d) => {
      if (!m[d.nombre]) {
        m[d.nombre] = {...d, count: 1};
        return m;
      }

      m[d.nombre].puntos += d.puntos;
      m[d.nombre].count += 1;
      return m;
    }, []);

    this.personas = Object.keys(listadoAgrupado).map(k => {
      const item  = listadoAgrupado[k];
      return {
          nombre: item.nombre,
          puntos: item.puntos,
          count: item.count
      };
    });

    console.log(this.personas);

  }

}
