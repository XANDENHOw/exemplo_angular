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
import { MicroondasComponent } from './microondas/microondas.component';
import { CpPaiComponent } from './md-pai-filho/cp-pai/cp-pai.component';
import { CpPaiComponent as CpPaiComponent2} from './md-filho-pai/cp-pai/cp-pai.component';
import { CpAgrupadorComponent } from './md-service/cp-agrupador/cp-agrupador.component';
import { CpWindowComponent } from './atv-modulos/cp-window/cp-window.component';

const routes: Routes = [
  {path:"exemploBindings", component: ExemploBindingComponent},
  {path:"imc", component: CalcImcComponent},
  {path:"class", component: DiretivaNgClassComponent},
  {path:"for", component: DiretivaNgForComponent},
  {path:"if", component: DiretivaNgIfComponent},
  {path:"model", component: DiretivaNgModelComponent},
  {path:"style", component: DiretivaNgStyleComponent},
  {path:"switch", component: DiretivaNgSwitchComponent},
  {path:"pipes", component: ExemploPipesComponent},
  {path:"microondas", component: MicroondasComponent},
  {path:"pai_filho", component: CpPaiComponent},
  {path:"filho_pai", component: CpPaiComponent2},
  {path:"service", component: CpAgrupadorComponent},
  {path:"cadmed", component: CpWindowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
