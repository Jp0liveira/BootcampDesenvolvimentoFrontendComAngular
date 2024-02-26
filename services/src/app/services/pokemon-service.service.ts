import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { PokemonModel } from '../models/pokemonModel';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {
  private baseURL: string = "";
  private pokeData: PokemonModel | any;

  constructor( private httpClient: HttpClient) {
    this.baseURL = environment.pokeApi;
  }

  getPokemon(name: string): Observable<PokemonModel>{
    this.pokeData = this.httpClient.get<PokemonModel>(`${this.baseURL}${name}`);
    return this.pokeData;
  }
}
