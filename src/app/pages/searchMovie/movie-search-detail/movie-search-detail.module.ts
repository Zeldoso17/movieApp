import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieSearchDetailPageRoutingModule } from './movie-search-detail-routing.module';

import { MovieSearchDetailPage } from './movie-search-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieSearchDetailPageRoutingModule
  ],
  declarations: [MovieSearchDetailPage]
})
export class MovieSearchDetailPageModule {}
