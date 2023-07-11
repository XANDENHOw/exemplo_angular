import { Component, OnInit } from '@angular/core';
import { FormTableService } from '../services/form-table.service';

@Component({
  selector: 'app-cp-table',
  templateUrl: './cp-table.component.html',
  styleUrls: ['./cp-table.component.scss']
})
export class CpTableComponent implements OnInit {
  
  public medicamentos: Array<any> = [];

  constructor(private service: FormTableService) { }

  ngOnInit(): void {
    this.medicamentos = this.service.getLista();
  }
}
