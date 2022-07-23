import { Component, OnInit } from '@angular/core';
import { NewMoviesService } from '../../services/newMovies/new-movies.service';

@Component({
  selector: 'app-new-movies',
  templateUrl: './new-movies.component.html',
  styleUrls: ['./new-movies.component.scss'],
})
export class NewMoviesComponent implements OnInit {

  newMovies = [];

  constructor(private newMoviesService: NewMoviesService) { }

  ngOnInit() {
    this.newMoviesService.getNewMovies().subscribe(data => {
      this.newMovies = data.results;
    });
  }

}
