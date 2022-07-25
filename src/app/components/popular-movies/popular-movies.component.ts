import { Component, OnInit } from '@angular/core';
import { PopularMoviesService } from '../../services/popularMovies/popular-movies.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss'],
})
export class PopularMoviesComponent implements OnInit {

  popularMovies = [];

  popularMoviesSlideOpt = {
    freeMode: true,
    slidesPerView: 3.5,
    slidesOffsetBefore: 11,
    spaceBetween: 10
  };

  constructor(private popularMoviesService: PopularMoviesService) { }

  ngOnInit() {
    this.getPopularMovies();
  }

  getPopularMovies(){
    this.popularMoviesService.getPopularMovies().subscribe(data => {
      this.popularMovies = data.results;
    });
  }

}
