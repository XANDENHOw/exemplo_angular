import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormTableService {

  public nomeSelected: string = "";
  public precoSelected: number = 0;
  public emitEvent = new EventEmitter();

  private medicamentos: Array<any> = [
    {nome: "Dorflex", preco: 10}
  ];

  public getLista(){
    return this.medicamentos;
  }

  public adiciona(nomeMedicamento: string, precoMedicamento: number){
    this.medicamentos.push({nome: nomeMedicamento, preco: precoMedicamento});
    this.emitEvent.emit(this.medicamentos.length);
    return this.medicamentos;
  }

  public clickMedicamento(med: any){
    console.log(med);
    this.nomeSelected = med.nomeSelecionado;
    this.precoSelected = med.precoSelecionado;
  }
}
