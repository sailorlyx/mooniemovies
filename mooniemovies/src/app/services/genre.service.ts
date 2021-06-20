import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GenreModel } from '../models/genre.model';

@Injectable({
  providedIn: 'root'

})

export class GenreService {
  public constructor(private http: HttpClient) {
    this.http = http;
  }

  public getGenres(which: string): Observable<GenreModel[]> {
    return this.http.get<any>(`https://api.themoviedb.org/3/genre/${which}/list?api_key=${environment.moviedbKey}&language=es-ES`).pipe(
      map(response => {
        let generos: GenreModel[] = [];
        response.genres.forEach((item: any) => generos.push(new GenreModel(item)));
        return generos;
      })
    )
  }
}

