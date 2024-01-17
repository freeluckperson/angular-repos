import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonResults } from '../../interfaces/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private _HttpClient: HttpClient) {}

  getPokemonList(): Observable<PokemonResults> {
    return this._HttpClient.get<PokemonResults>(
      'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
    );
  }
}
