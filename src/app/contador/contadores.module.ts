import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations: [ //Tiene los componentes 
        ContadorComponent
    ],
    exports: [ //Quiero hacerlo publico o visible desde afuera
        ContadorComponent
    ],
    imports: [ //Usualmente modulos
        
    ]
})

export class ContadoresModule {

}
