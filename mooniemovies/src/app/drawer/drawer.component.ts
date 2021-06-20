import { MoviePage } from './../models/movie-page.model';
import { GenreService } from './../services/genre.service';
import { GenreModel } from './../models/genre.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../services/movie.service';
import { Params, Router } from '@angular/router';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {
  public generosMovie: Observable<GenreModel[]>;
  public generosTv: Observable<GenreModel[]>;

  public title = 'BUSCA PELÍCULAS Y SERIES';
  public movies: MoviePage;

  constructor(private genreService: GenreService, public service: MovieService, public router: Router) { }

  ngOnInit(): void {
    this.generosMovie = this.genreService.getGenres('movie');
    this.generosTv = this.genreService.getGenres('tv');
  }

  buscar(params: Params) {
    this.router.navigate([''], { queryParams: params })
  }
}
