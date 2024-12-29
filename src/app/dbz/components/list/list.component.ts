import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPersonaje } from '../../interfaces/IPersonaje';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output("ExternalonDeleteId")
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  @Input()
  public personajesHijo: IPersonaje[] = [];

  onDeletePersonaje(id: string): void {
    console.log("Id a borrar : ", id);
    this.onDeleteId.emit(id);
  }
}
