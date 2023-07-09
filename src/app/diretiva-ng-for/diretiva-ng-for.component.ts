import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-for',
  templateUrl: './diretiva-ng-for.component.html',
  styleUrls: ['./diretiva-ng-for.component.scss']
})
export class DiretivaNgForComponent {
  contador : number = 4;
  nomeSelecionado: string = "";
  idadeSelecionado: number = 0;

  public listaPessoas: any = [
    {nome: "Pessoa 1", idade: 25},
    {nome: "Pessoa 2", idade: 30},
    {nome: "Pessoa 3", idade: 55}
  ];

  public addPessoa(){
    this.listaPessoas.push({nome: 'Pessoa ' + this.contador, idade: this.contador + 30});
    this.contador ++;
    this.nomeSelecionado = '';
  }

  public removePessoa(){
    this.listaPessoas.pop();
    this.contador --;
    this.nomeSelecionado = '';
  }

  public clickPessoa(p: any){
    console.log(p);
    this.nomeSelecionado = p.nome;
    this.idadeSelecionado = p.idade;
  }

  modelo: string = "";
  ano: number = 0;
  quantidade:number = 0;

  public carros: any = [
    {modelo: "Corolla", ano: 2020, quantidade:5},
    {modelo: "Civic", ano: 2020, quantidade:5},
    {modelo: "Cruze", ano: 2020, quantidade:5}
  ];

  public comprarCorolla(){
    const corolla = this.carros.find((value: any) => value.modelo === "Corolla");
    if(corolla && corolla.quantidade > 0){
      corolla.quantidade -= 1;
    }
  }

  public comprarCivic(){
    const civic = this.carros.find((value: any) => value.modelo === "Civic");
    if(civic && civic.quantidade > 0){
      civic.quantidade -= 1;
    }
  }

  public comprarCruze(){
    const cruze = this.carros.find((value: any) => value.modelo === "Cruze");
    if(cruze && cruze.quantidade > 0){
      cruze.quantidade -= 1;
    }
  }

  public clickCarro(c: any){
    console.log(c);
    this.modelo = c.modelo;
    this.ano = c.ano;
    this.quantidade = c.quantidade;
  }
}
