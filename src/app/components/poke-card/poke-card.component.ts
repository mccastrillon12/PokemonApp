import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {

  pokemon: any = '';
  pokemonType = [];
  pokemonImg= '';
  pokemonHeight = '';
  pokemonWeight ='';
  pokemonName='';

  constructor(private pokemonService: PokemonService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(
      params => {
        this.getPokemon(params['id'])
      }
    )
   }

  ngOnInit(): void {
  }
getPokemon(id:any){
  this.pokemonService.getPokemons(id).subscribe(
    res => {
      this.pokemon= res;
      this.pokemonImg = this.pokemon.sprites.front_default
      this.pokemonHeight = res.height
      this.pokemonWeight = res.weight
      this.pokemonType=res.types[1].type.name
      this.pokemonName = res.name

    }
  )
}
}
