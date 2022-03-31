import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/constants/constants';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl = Constants.UrlPokemonApp;

  constructor(private http: HttpClient) { }

    getPokemons(index:any){

      return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);
    }


}
