import { Component } from '@angular/core';
import { IPersonaje } from '../interfaces/IPersonaje';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'dbz-main-page',
  templateUrl: 'main-page.component.html'
})
export class MainPageComponent {

  // injeccion de dependencias
  constructor(private dbzService : DbzService) {

  }

  // creacion de getter
  get personajes() : IPersonaje[] {
    // retornamos una copia mas no el valor por referencia
    return [...this.dbzService.personajes];
  }

  // creacion de un nuevo metodo para invocar el servicio de borrado
  public OnDeletePersonaje(id: string) : void {
    this.dbzService.metodoDeletePersonaje(id);
  }

  // creacion de un nuevo metodo para agregar un personaje
  public OnAddPersonaje(personaje: IPersonaje) : void {
    this.dbzService.metodoAddpersonaje(personaje);
  }

}
