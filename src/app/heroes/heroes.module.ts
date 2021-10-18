import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [ //Tiene los componentes 
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ //Quiero hacerlo publico o visible desde afuera
        ListadoComponent
    ],
    imports: [ //Usualmente modulos
        CommonModule
    ]
})

export class HeroesModule {

}