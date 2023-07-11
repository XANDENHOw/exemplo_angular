import { Component, OnInit } from '@angular/core';
import { ExemploServiceService } from '../services/exemplo-service.service';

@Component({
  selector: 'app-cp-a',
  templateUrl: './cp-a.component.html',
  styleUrls: ['./cp-a.component.scss']
})
export class CpAComponent implements OnInit{
  ngOnInit(): void {
    this.service.emitEvent.subscribe({
      next: (res: number) => this.qt = res,
      error: (err:number) => this.qt = 0,
    });
  }

  public qt:number = 0;
  //injeçaõ de dependencia do service
  constructor(private service: ExemploServiceService){}

  public addItem(valor:string){
    return this.service.adiciona(valor);
  }
}
