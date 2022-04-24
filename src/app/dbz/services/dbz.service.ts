import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    //El guion bajo es estandar para atributos privados
    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        }, 
        {
          nombre: 'Vegeta',
          poder: 7500
        }
    ];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor() {}

    agregarPersonaje(personaje: Personaje) {
      this._personajes.push(personaje);
    }
}