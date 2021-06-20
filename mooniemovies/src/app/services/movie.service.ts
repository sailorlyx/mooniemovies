import { MovieModel } from './../models/movie.models';
import { MoviePage } from './../models/movie-page.model';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'

})

export class MovieService {
  public constructor(private http: HttpClient) {
    this.http = http;
  }

  private getMovies(endpoint: string, params: HttpParams = new HttpParams()): Observable<MoviePage> {
    params = params.appendAll({
      api_key: environment.moviedbKey,
      include_adult: 'false'
    });

    return this.http.get<MoviePage>(`${environment.moviedbUrl}${endpoint}`, { params: params }).pipe(
      map((res: any) => new MoviePage(res))
    )
  }

  private getMovie(endpoint: string, params: HttpParams = new HttpParams()): Observable<MovieModel> {
    params = params.appendAll({
      api_key: environment.moviedbKey,
      language: 'es-ES'
    });

    return this.http.get<MovieModel>(`${environment.moviedbUrl}${endpoint}`, { params: params }).pipe(
      map((res: any) => new MovieModel(res))
    )
  }

  public getById(id: number, which: string = 'movie') {
    return this.getMovie(`/${which}/${id}`);
  }

  public search(params: any, which: string) {
    return this.getMovies(`/search/${which}`, params);
  }

  public discover(params: any, which: string) {
    let httpParams = new HttpParams({
      fromObject: {
        ...params,
        language: 'es-ES'
      },
    });

    console.log(httpParams);
    return this.getMovies(`/discover/${which}`, httpParams);
  }
}

