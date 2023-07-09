import { Component } from '@angular/core';

@Component({
  selector: 'app-calc-imc',
  templateUrl: './calc-imc.component.html',
  styleUrls: ['./calc-imc.component.scss']
})
export class CalcImcComponent {

  public nome: string = "";
  public sexo: string = "";
  public peso: number = 0;
  public altura: number = 0;
  public imc: number =  0;
  public avaliacao: string = "";


  public calcImc() {
    this.imc = this.peso / (this.altura * this.altura)
  }
  public avaliacaoImc() {
    if (this.imc < 20) {
      this.avaliacao = "Você está abaixo do peso";
    } else if (this.imc >= 20 && this.imc < 25) {
      this.avaliacao = "Você está no peso ideal";
    } else if (this.imc >= 25 && this.imc < 30) {
      this.avaliacao = "Você está com obesidade leve";
    } else if (this.imc >= 30 && this.imc < 40) {
      this.avaliacao = "Você está com obesidade moderada";
    } else if (this.imc >= 40) {
      this.avaliacao = "Você está com obesidade morbida";
    }
  }
}
