import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MostrarListadoComponent } from './mostrar-listado/mostrar-listado.component';

@NgModule({
  declarations: [
    AppComponent,
    MostrarListadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
