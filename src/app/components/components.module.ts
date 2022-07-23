import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwiperModule } from 'swiper/angular';
import { NewMoviesComponent } from './new-movies/new-movies.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';



@NgModule({
  declarations: [
    NewMoviesComponent,
    NowPlayingComponent,
    PopularMoviesComponent
  ],
  imports: [
    CommonModule,
    SwiperModule
  ],
  exports: [
    NewMoviesComponent,
    NowPlayingComponent,
    PopularMoviesComponent
  ]
})
export class ComponentsModule { }
