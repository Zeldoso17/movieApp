import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NowPlayingService } from '../../services/nowPlaying/now-playing.service';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss'],
})
export class NowPlayingComponent implements OnInit {

  nowPlayingMovies = [];

  moviesSlideOpt = {
    freeMode: true,
    slidesPerView: 3.5,
    slidesOffsetBefore: 11,
    spaceBetween: 10
  };

  constructor(private nowPlayingService: NowPlayingService, private route: Router) { }

  ngOnInit() {
    this.nowPlayingService.getMovies().subscribe(data => {
      this.nowPlayingMovies = data.results;
    });
  }

  openDetailMovie(id: number){
    this.route.navigate(['/tabs/movie-list', id]);
  }

}
