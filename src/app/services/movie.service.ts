import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from '../types/movies.interface';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private readonly http: HttpClient) {}

  getNowPlayingMovies(): Observable<any> {
    return this.http.get<any>(`${environment.BASE_URL}/movie/now_playing`, {
      params: {
        api_key: environment.API_KEY,
      },
    });
  }

  getPopularMovies(): Observable<any> {
    return this.http.get<any>(`${environment.BASE_URL}/movie/popular`, {
      params: {
        api_key: environment.API_KEY,
      },
    });
  }

  getTopRatedMovies(): Observable<any> {
    return this.http.get<any>(`${environment.BASE_URL}/movie/top_rated`, {
      params: {
        api_key: environment.API_KEY,
      },
    });
  }

  getDetailMovie(id: number): Observable<any> {
    return this.http.get<any>(`${environment.BASE_URL}/movie/${id}`, {
      params: {
        api_key: environment.API_KEY,
      },
    });
  }

  getCreditsMovie(id: number): Observable<any> {
    return this.http.get<any>(`${environment.BASE_URL}/movie/${id}/credits`, {
      params: {
        api_key: environment.API_KEY,
      },
    });
  }

  getSimilarMovie(id: number): Observable<any> {
    return this.http.get<any>(
      `${environment.BASE_URL}/movie/${id}/recommendations`,
      {
        params: {
          api_key: environment.API_KEY,
        },
      }
    );
  }

  searchMovies(query: string): Observable<any> {
    return this.http.get<any>(`${environment.BASE_URL}/search/movie`, {
      params: {
        api_key: environment.API_KEY,
        query,
      },
    });
  }
}
