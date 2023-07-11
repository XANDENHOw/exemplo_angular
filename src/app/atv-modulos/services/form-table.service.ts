import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormTableService {

  public emitEvent = new EventEmitter();

  private medicamentos: Array<any> = [];

  public getLista(){
    return this.medicamentos;
  }

  public adiciona(medicamento: any){
    this.medicamentos.push(medicamento);
    this.emitEvent.emit(this.medicamentos.length);
    return this.medicamentos;
  }
}
