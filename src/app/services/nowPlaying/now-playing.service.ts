import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NowPlayingService {

  url = `movie/now_playing?api_key=${environment.apiKey}&language=es-MX&page=1&region=MX`;

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    return this.http.get<any>(`${environment.url}${this.url}`);
  }
}
