import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPersonaje } from '../../interfaces/IPersonaje';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  // creamos el evento que emite la clase
  @Output("NombreAfueraPersonaje")
  public onNewPersonaje: EventEmitter<IPersonaje> = new EventEmitter();

  public personajeForm: IPersonaje = {
    name: '',
    power: 0
  }

  public emitirPersonaje() : void {

    if(this.personajeForm.name == '' || this.personajeForm.power == 0) return;

    console.log(this.personajeForm);
    //debugger;

    // se esta emitiendo la referencia del objeto del hijo MAL!!
    this.onNewPersonaje.emit(this.personajeForm);

    // AQUI CREAMOS UNA NUEVA REFERENCIA POR ESO SE ARREGLO
    this.personajeForm = { name : "", power : 0};
  }

}
