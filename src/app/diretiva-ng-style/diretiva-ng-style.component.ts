import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-style',
  templateUrl: './diretiva-ng-style.component.html',
  styleUrls: ['./diretiva-ng-style.component.scss']
})
export class DiretivaNgStyleComponent {

  public largura : number = 100;
  public larguraStr : string = "100px"
  public borderRadius: number = 50;
  public borderRadiusStr: string = "50px";


  aumenta(){
    this.largura += 50;
    this.larguraStr = this.largura+"px";
  }

  diminui(){
    this.largura -= 50;
    this.larguraStr = this.largura+"px";
  }
   
  arredonda(){
    this.borderRadius += 50;
    this.borderRadiusStr = this.borderRadius + "px";
  }
}
