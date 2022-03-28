import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsComponent } from './components/news/news.component';
import { News1Component } from './components/news/news1/news1.component';
import { News2Component } from './components/news/news2/news2.component';
import { News3Component } from './components/news/news3/news3.component';
import { HomeComponent } from './components/home/home.component';
import { HistoryComponent } from './components/news/history/history.component';
import { Episode1Component } from './components/episodes/episode1/episode1.component';
import { Episode2Component } from './components/episodes/episode2/episode2.component';
import { Episode3Component } from './components/episodes/episode3/episode3.component';




const routes : Routes = [
  {
    path:'list',
    component:PokeListComponent
  },

  {
    path:'home',
    component:HomeComponent
  },

  {
    path:'history',
    component:HistoryComponent
  },
  {
    path:'news1',
    component:News1Component
  },

  {

    path:'news2',
    component:News2Component
  },
  {

    path:'news3',
    component:News3Component
  },

  {
    path:'episode1',
    component:Episode1Component
  },
  {
    path:'episode2',
    component:Episode2Component
  },
  {
    path:'episode3',
    component:Episode3Component
  },
  {
    path:'card/:id',
    component:PokeCardComponent
  },
  {
    path:'menu',
    component:HeaderComponent
  },
  {
    path:'**',
    redirectTo:'home',
  },

];

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }
