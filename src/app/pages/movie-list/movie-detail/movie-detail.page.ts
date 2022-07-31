import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieDetailService } from '../../../services/movieDetail/movie-detail.service';
import { InfoMovie } from '../../../interfaces/infoMovie/info-movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit {

  movieID = '';
  ratingMovie = '';
  infoMovie = {};
  cast = [];
  similarMovies = [];
  cambioIcono = false;
  localData = [];
  title: InfoMovie;

  peliculasFav = [];
  peliculas = [];

  moviesSlideOpt = {
    freeMode: true,
    slidesPerView: 1.5,
    slidesOffsetBefore: 11,
  };

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

  async getinfoMovie() {
    await this.movieDetailService.getMovieDetail(this.movieID).subscribe(data => {
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
