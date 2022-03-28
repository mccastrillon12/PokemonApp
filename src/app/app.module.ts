import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import {YouTubePlayerModule} from '@angular/youtube-player';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import { NewsComponent } from './components/news/news.component';
import { News1Component } from './components/news/news1/news1.component';
import { News2Component } from './components/news/news2/news2.component';
import { News3Component } from './components/news/news3/news3.component';
import { HomeComponent } from './components/home/home.component';
import { HistoryComponent } from './components/news/history/history.component';
import { FilterPipe } from './pipes/filter.pipe';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { Episode1Component } from './components/episodes/episode1/episode1.component';
import { Episode2Component } from './components/episodes/episode2/episode2.component';
import { Episode3Component } from './components/episodes/episode3/episode3.component';









@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PokeCardComponent,
    PokeListComponent,
    NewsComponent,
    News1Component,
    News2Component,
    News3Component,
    HomeComponent,
    HistoryComponent,
    FilterPipe,
    EpisodesComponent,
    Episode1Component,
    Episode2Component,
    Episode3Component,





  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    YouTubePlayerModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
