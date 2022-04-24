import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter(); 

  constructor(private dbzService: DbzService) {}

  agregar() {
    console.log(this.nuevo);
    //this.onNuevoPersonaje.emit(this.nuevo);
    
    this.dbzService.agregarPersonaje(this.nuevo);
    
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    this.nuevo = { nombre: '', poder: 0};
  }
}
