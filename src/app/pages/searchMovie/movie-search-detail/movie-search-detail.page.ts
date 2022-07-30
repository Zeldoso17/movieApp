import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailService } from 'src/app/services/movieDetail/movie-detail.service';

@Component({
  selector: 'app-movie-search-detail',
  templateUrl: './movie-search-detail.page.html',
  styleUrls: ['./movie-search-detail.page.scss'],
})
export class MovieSearchDetailPage implements OnInit {

  movieID: string;
  infoMovie: string;
  cast: string;
  similarMovies: string;

  moviesSlideOptSimilar = {
    freeMode: true,
    slidesPerView: 3.5,
    slidesOffsetBefore: 11,
    spaceBetween: 10
  };

  constructor(private movieDetailService: MovieDetailService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getParam();
    this.getinfoMovie();
    this.getActorsMovie();
    this.getSimiarMovies();
  }

  getParam() {
    this.activatedRoute.paramMap.subscribe(param => {
      this.movieID = param.get('movieID');
    });
  }

  getinfoMovie() {
    this.movieDetailService.getMovieDetail(this.movieID).subscribe(data => {
      this.infoMovie = data;
    });
  }

  getMovieRating() {
    this.movieDetailService.getMovieRating(this.movieID).subscribe(data => {
      console.log(data);
    });
  }

  getActorsMovie() {
    this.movieDetailService.getActorsMovie(this.movieID).subscribe(data => {
      this.cast = data.cast;
    });
  }

  getSimiarMovies() {
    this.movieDetailService.getSimilarMovies(this.movieID).subscribe(data => {
      this.similarMovies = data.results;
    });
  }

}
