import { Injectable } from '@angular/core';
import { IPersonaje } from '../interfaces/IPersonaje';
import { v4 as uuidv4 } from 'uuid';



@Injectable({providedIn: 'root'})
export class DbzService {

  public personajes: IPersonaje[] = [
    {
      id : uuidv4(), name : "Krilin", power : 1000
    },
    {
      id : uuidv4(), name : "Goku", power : 10000
    },
    {
      id : uuidv4(), name : "Goku", power : 10000
    }
  ];

  // creamos funcion que procesara el evento
  public metodoAddpersonaje(personaje: IPersonaje){
    console.log("Main Page :", personaje);
    this.personajes.push(personaje);
  }

  public metodoDeletePersonaje(id: string){
    console.log("Main Page :", id );
    this.personajes = this.personajes.filter( (personaje, index) => {
      return personaje.id != id;
    })
  }

}
