import { Component, OnInit } from '@angular/core';
import { FormTableService } from '../services/form-table.service';

@Component({
  selector: 'app-cp-form',
  templateUrl: './cp-form.component.html',
  styleUrls: ['./cp-form.component.scss']
})
export class CpFormComponent implements OnInit{

  public nomeSelecionado: string = "";
  public precoSelecionado: number = 0;
  public medicamentos: any = [];
  public qt: number = 0;

  constructor(private service: FormTableService){}
 
  ngOnInit(): void {
    this.service.emitEvent.subscribe({
      next: (res: number) => this.qt = res,
      error: (err:number) => this.qt = 0,
    });
  }

  public addMedicamento(nome:string, preco:string){
    return this.service.adiciona(nome, parseFloat(preco));
  }
}
