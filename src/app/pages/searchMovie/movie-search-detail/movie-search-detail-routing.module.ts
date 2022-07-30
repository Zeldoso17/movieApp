import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieSearchDetailPage } from './movie-search-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MovieSearchDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieSearchDetailPageRoutingModule {}
