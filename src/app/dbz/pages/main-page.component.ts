import { Component } from '@angular/core';
import { IPersonaje } from '../interfaces/IPersonaje';

@Component({
  selector: 'dbz-main-page',
  templateUrl: 'main-page.component.html'
})
export class MainPageComponent {
  public personajes: IPersonaje[] = [
    {
      name : "Krilin", power : 1000
    },
    {
      name : "Goku", power : 10000
    },
    {
      name : "Goku", power : 10000
    }
  ];

  // creamos funcion que procesara el evento
  public metodoAddpersonaje(personaje: IPersonaje){
    console.log("Main Page :", personaje);
    this.personajes.push(personaje);
  }

  public metodoDeletePersonaje(id: number){
    console.log("Main Page :", id );
    this.personajes = this.personajes.filter( (personaje, index) => {
      return index != id;
    })
  }

}
