import { MovieService } from './../services/movie.service';
import { MoviePage } from './../models/movie-page.model';
import { Component, Input, OnInit } from '@angular/core';
import { MovieModel } from '../models/movie.models';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-listapelis',
  templateUrl: './listapelis.component.html',
  styleUrls: ['./listapelis.component.scss']
})
export class ListapelisComponent implements OnInit {
  private timeOut: number;

  @Input() movies: MoviePage;
  @Input() title: string;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: MovieService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(params => {
      let query = params.get('title');
      let language = params.get('language') || undefined;
      let which = params.get('which') || undefined;
      let with_genres = params.get('with_genres') || undefined;
      let sort_by = params.get('sort_by') || 'popularity.desc';
      let page = params.get('page') || '1';
      if (query) {
        this.buscarPorTitulo(query, language, which, page);
      } else {
        let params: any = { sort_by, page };
        if (with_genres) {
          params.with_genres = with_genres;
        }
        this.discover(params, which);
      }
    })
  }

  public movieClick(movie: MovieModel) {
    if (movie.esSerie) {
      this.router.navigate(['tv', movie.id]);
    } else {
      this.router.navigate(['movie', movie.id]);
    }
  }


  private buscarConDelay(busqueda: Observable<MoviePage>): void {
    if (this.timeOut)
      clearTimeout(this.timeOut);
    this.timeOut = window.setTimeout(() => {
      busqueda.subscribe(res => {
        this.movies = res
      });
    }, 200);
  }

  public buscarPorTitulo(titulo: string, language: string = 'es-ES', which: string = 'movie', page: string = '1') {
    titulo = titulo.trim();
    if (titulo.length > 2) {
      let params = new HttpParams({
        fromObject: {
          query: titulo,
          language,
          page: page
        }
      });
      this.buscarConDelay(this.service.search(params, which));
    }
  }

  public discover(params: any, which: string = 'movie') {
    this.service.discover(params, which).subscribe(res => {
      this.movies = res;
    })
  }

  public pageRange() {
    const minPage = Math.max(1, Math.min(this.movies.totalPages - 5, this.movies.page - 3));
    const maxPage = Math.min(this.movies.totalPages, Math.max(this.movies.page + 3, 6));
    const numbers = [];
    for (let i = minPage; i <= maxPage; ++i) {
      numbers.push(i);
    }
    console.log(minPage, maxPage, this.movies.totalPages, this.movies.page + 3, numbers);
    return numbers;
  }
}
