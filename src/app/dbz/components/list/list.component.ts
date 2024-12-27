import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPersonaje } from '../../interfaces/IPersonaje';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output("ExternalonDeleteId")
  public onDeleteId: EventEmitter<number> = new EventEmitter();

  @Input()
  public personajesHijo: IPersonaje[] = [];

  onDeletePersonaje(index: number): void {
    console.log("Indice: ", index);
    this.onDeleteId.emit(index);
  }
}
