import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { SearchMoviesService } from '../../services/searchMovies/search-movies.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.page.html',
  styleUrls: ['./search-movie.page.scss'],
})
export class SearchMoviePage implements OnInit {

  movieName: string;
  movies = [];

  constructor(private searchMovies: SearchMoviesService, private route: Router, public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async getMovies() {
    if(this.movieName !== undefined && this.movieName !== '') {
      this.searchMovies.getMovies(this.movieName).subscribe(data => {
        this.movies = data.results;
        this.movies = this.movies.filter(movie => movie.poster_path !== null);
      });
    }else{
      await this.alertNoTitle();
    }
  }

  async alertNoTitle(){
    const alert = await this.alertCtrl.create({
      header: 'Alerta',
      subHeader: 'Campo título vacío',
      message: 'Tienes que escribir un título para buscar',
      buttons: ['OK']
    });
    await alert.present();
  }

  openDetailMovie(id: number){
    this.route.navigate(['/tabs/search-movie', id]);
  }

}
