import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailService {

  url: string;

  constructor(private http: HttpClient) { }

  getMovieDetail(id: string): Observable<any> {
    this.url = `movie/${id}?api_key=${environment.apiKey}&language=es-MX`;
    return this.http.get<any>(`${environment.url}${this.url}`);
  }

  getMovieRating(id: string): Observable<any> {
    this.url = `movie/${id}/reviews?api_key=${environment.apiKey}&language=es-MX&page=1`;
    return this.http.get<any>(`${environment.url}${this.url}`);
  }

  getActorsMovie(id: string): Observable<any> {
    this.url = `movie/${id}/credits?api_key=${environment.apiKey}&language=es-MX`;
    return this.http.get<any>(`${environment.url}${this.url}`);
  }

  getSimilarMovies(id: string): Observable<any> {
    this.url = `movie/${id}/similar?api_key=${environment.apiKey}&language=es-MX&page=1`;
    return this.http.get<any>(`${environment.url}${this.url}`);
  }
}
