import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListPage } from './movie-list/movie-list.page';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    MovieListPage
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    MovieListPage
  ]
})
export class PagesModule { }
