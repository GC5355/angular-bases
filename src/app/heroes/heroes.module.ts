import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";


@NgModule({
  declarations: [HeroComponent, ListComponent],
  exports: [HeroComponent, ListComponent], // Esta línea hace que los componentes declarados en este módulo puedan ser usados en otros módulos.
  imports:[CommonModule]
})
export class HeroesModule { }
