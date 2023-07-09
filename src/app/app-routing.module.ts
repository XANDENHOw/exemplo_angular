import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExemploBindingComponent } from './exemplo-binding/exemplo-binding.component';
import { CalcImcComponent } from './calc-imc/calc-imc.component';
import { DiretivaNgClassComponent } from './diretiva-ng-class/diretiva-ng-class.component';
import { DiretivaNgForComponent } from './diretiva-ng-for/diretiva-ng-for.component';
import { DiretivaNgIfComponent } from './diretiva-ng-if/diretiva-ng-if.component';
import { DiretivaNgModelComponent } from './diretiva-ng-model/diretiva-ng-model.component';
import { DiretivaNgStyleComponent } from './diretiva-ng-style/diretiva-ng-style.component';
import { DiretivaNgSwitchComponent } from './diretiva-ng-switch/diretiva-ng-switch.component';
import { ExemploPipesComponent } from './exemplo-pipes/exemplo-pipes.component';

const routes: Routes = [
  {path:"exemploBindings", component: ExemploBindingComponent},
  {path:"imc", component: CalcImcComponent},
  {path:"class", component: DiretivaNgClassComponent},
  {path:"for", component: DiretivaNgForComponent},
  {path:"if", component: DiretivaNgIfComponent},
  {path:"model", component: DiretivaNgModelComponent},
  {path:"style", component: DiretivaNgStyleComponent},
  {path:"switch", component: DiretivaNgSwitchComponent},
  {path:"pipes", component: ExemploPipesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
