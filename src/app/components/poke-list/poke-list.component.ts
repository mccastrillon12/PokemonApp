import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokeCardComponent } from '../poke-card/poke-card.component';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {
  information: string[] = ['position','img', 'name'];
  filterData='';
  data: any[] = [];
  types: any[] = [];







  constructor(private pokeService: PokemonService, private router: Router) {

   }



  ngOnInit(): void {
    this.getPokemons();


  }

  getPokemons(){
    var pokemonData;

    for (let i = 1; i <=300; i++){
      this.pokeService.getPokemons(i).subscribe(
        res => {
          pokemonData = {
            position: i,
            img: res.sprites.front_default,
            name: res.name,
            type: res.types[0].type.name,
          };
            this.data.push(pokemonData)


        },

      )
    }


  }


  getCar(id: number){
    console.log(id)
    this.router.navigateByUrl(`card/${id}`)

  }

  // searchPokemon(pokemonName : string){
  //   var pokemonCache = localStorage.getItem('pokemons')

  //   if(pokemonCache == null){
  //     const jsonData = JSON.stringify(this.data)
  //     localStorage.setItem('pokemons', jsonData)
  //     var pokemonSearched = this.data.filter(searched => searched.name == pokemonName );
  //     this.data = pokemonSearched
  //   }else{
  //      pokemonCache = JSON.parse(localStorage.getItem('pokemons'))
  //      this.data = pokemonCache ===  null ? [] : [pokemonCache] ;
  //      this.data = this.data [0]
  //      var pokemonSearched = this.data.filter(searched => searched.name == pokemonName );
  //      this.data = pokemonSearched
  //   }
  // }

  // clearSearch(){
  //   var pokemonCache = JSON.parse(localStorage.getItem('pokemons'));
  //   document.getElementsByTagName("input")[0].value = "";
  //   this.data = pokemonCache
  //   localStorage.clear();
  // }

}
