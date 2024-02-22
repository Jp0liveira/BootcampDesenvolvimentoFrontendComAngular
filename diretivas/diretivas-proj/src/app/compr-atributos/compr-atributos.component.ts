import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compr-atributos',
  templateUrl: './compr-atributos.component.html',
  styleUrls: ['./compr-atributos.component.css']
})
export class ComprAtributosComponent implements OnInit {
  estilo: String = "enable";
  corFundo: String = "red";
  item: String = "";
  constructor() { }

  ngOnInit(): void {
  }

}
