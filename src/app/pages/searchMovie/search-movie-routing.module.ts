import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchMoviePage } from './search-movie.page';

const routes: Routes = [
  {
    path: '',
    component: SearchMoviePage
  },
  {
    path: ':movieID',
    loadChildren: () => import('../searchMovie/movie-search-detail/movie-search-detail.module').then( m => m.MovieSearchDetailPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchMoviePageRoutingModule {}
