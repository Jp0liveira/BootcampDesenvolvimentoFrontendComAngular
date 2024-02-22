import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  menuType: String = "";
  produtos: String[] = [];
  constructor() {
    this.produtos = [
      "mouse",
      "teclado",
      "monitor",
      "cadeira"
    ];
  }

  ngOnInit(): void {
  }

  adicionar(){
    this.produtos.push("Adicionar");
  }

  alert(index: number){
    alert(`Index ${index}`)
  }

}
