import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Cast, Credits } from '../interfaces/credits';
import { MovieDetail } from '../interfaces/movie-detail';
import { Movie, NowPlaying } from '../interfaces/now-playing';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private baseUrl = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  public cargando = false;
  constructor(private http: HttpClient) {}

  get params() {
    return {
      api_key: '',
      language: 'es-ES',
      page: this.carteleraPage.toString(),
    };
  }

  getNowPlaying(): Observable<Movie[]> {
    if (this.cargando) {
      return of([]);
    }
    this.cargando = true;
    return this.http
      .get<NowPlaying>(`${this.baseUrl}/movie/now_playing`, {
        params: this.params,
      })
      .pipe(
        map((resp) => resp.results),
        tap(() => {
          this.carteleraPage += 1;
          this.cargando = false;
        })
      );
  }

  SearchMovie(query: string): Observable<Movie[]> {
    const params = { ...this.params, page: '1', query };
    return this.http
      .get<NowPlaying>(`${this.baseUrl}/search/movie`, {
        params,
      })
      .pipe(map((resp) => resp.results));
  }

  resetCarteleraPage() {
    this.carteleraPage = 1;
  }

  getMovieDetail(id: string) {
    return this.http
      .get<MovieDetail>(`${this.baseUrl}/movie/${id}`, {
        params: this.params,
      })
      .pipe(catchError((err) => of(null)));
  }

  getCreditsCast(id: string): Observable<Cast[]> {
    return this.http
      .get<Credits>(`${this.baseUrl}/movie/${id}/credits`, {
        params: this.params,
      })
      .pipe(
        map((resp) => resp.cast),
        catchError((err) => of([]))
      );
  }
}
