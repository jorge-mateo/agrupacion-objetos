import { Component, OnInit } from '@angular/core';
import listado from '../datos';

@Component({
  selector: 'app-mostrar-listado',
  templateUrl: './mostrar-listado.component.html',
  styleUrls: ['./mostrar-listado.component.scss']
})
export class MostrarListadoComponent implements OnInit {
  personas = [];
  listadoAgrupado: any;

  constructor() { }

  ngOnInit() {
    //console.log(listado.reduce((conteo, listado) => conteo + listado.puntos, 0));
    this.listadoAgrupado = listado.reduce((m, d) => {
      if(!m[d.nombre]) {
        m[d.nombre] = {...d, count: 1};
        return m;
      }

      m[d.nombre].puntos += d.puntos;
      m[d.nombre].count += 1;
      return m;
    }, []);

    console.log(this.listadoAgrupado);

  }

}
