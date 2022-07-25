import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'movie-list',
        loadChildren: () => import('./../../pages/movie-list/movie-list.module').then( m => m.MovieListPageModule)
      },
      {
        path: 'search-movie',
        loadChildren: () => import('./../../pages/searchMovie/search-movie.module').then( m => m.SearchMoviePageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
