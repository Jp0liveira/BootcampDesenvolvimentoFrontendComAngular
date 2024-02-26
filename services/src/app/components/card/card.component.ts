import { Component, Input, OnInit } from '@angular/core';
import { PokemonModel } from 'src/app/models/pokemonModel';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon: PokemonModel = {
    id: 0,
    name: "charizard",
    sprites: {
      front_default: ''
    },
    types: []
  };
  @Input() name: string = "chamander";


  constructor(
    private servicePokemon: PokemonServiceService
  ) { }

  ngOnInit(): void {
    this.getPokemon("charizard");
  }

  getPokemon(searchName: string){
    this.servicePokemon.getPokemon(searchName).subscribe({
      next: (resp) => this.pokemon = {
        id: resp.id,
        name: resp.name,
        sprites: resp.sprites,
        types: resp.types
      },
      error: (err) => console.log(err)
    });
  }

}
