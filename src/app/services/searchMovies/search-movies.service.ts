import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchMoviesService {

  url: string;

  constructor(private http: HttpClient) { }

  getMovies(moviesName: string): Observable<any> {
    this.url = `search/movie?api_key=${environment.apiKey}&language=es-MX&query=${moviesName}&page=1&include_adult=false&region=MX`;
    return this.http.get<any>(`${environment.url}${this.url}`);
  }

}
