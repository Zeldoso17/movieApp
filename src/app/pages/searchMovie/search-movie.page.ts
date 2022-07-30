import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SearchMoviesService } from '../../services/searchMovies/search-movies.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.page.html',
  styleUrls: ['./search-movie.page.scss'],
})
export class SearchMoviePage implements OnInit {

  movieName: string;
  movies = [];

  constructor(private searchMovies: SearchMoviesService, private route: Router) { }

  ngOnInit() {
  }

  getMovies() {
    if(this.movieName !== undefined) {
      this.searchMovies.getMovies(this.movieName).subscribe(data => {
        this.movies = data.results;
        this.movies = this.movies.filter(movie => movie.poster_path !== null);
      });
    }else{
      alert('Tienes que poner un titulo');
    }
  }

  openDetailMovie(id: number){
    this.route.navigate(['/tabs/search-movie', id]);
  }

}
