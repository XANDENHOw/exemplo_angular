import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-class',
  templateUrl: './diretiva-ng-class.component.html',
  styleUrls: ['./diretiva-ng-class.component.scss']
})
export class DiretivaNgClassComponent {
  public valor: boolean = true;

  public num1: number = 0;
  public num2: number = 0;
  public resultado: number = 0;

   ngOnInit(): void {
       setInterval(() =>{
        this.valor = !this.valor;
       }, 1000);
   }

   public compara(){
    this.resultado = this.num1 * this.num2;
    return this.resultado == 30;
   }
}
