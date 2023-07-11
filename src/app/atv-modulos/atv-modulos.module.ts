import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CpWindowComponent } from './cp-window/cp-window.component';
import { CpFormComponent } from './cp-form/cp-form.component';
import { CpTableComponent } from './cp-table/cp-table.component';



@NgModule({
  declarations: [
    CpFormComponent,
    CpTableComponent,
    CpWindowComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CpWindowComponent
  ]
})
export class AtvModulosModule { }
