import { MovieService } from './../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MovieModel } from '../models/movie.models';

@Component({
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.scss']
})
export class MoviedetailComponent implements OnInit {
  public movie: MovieModel;

  constructor(private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private router: Router) { }

  ngOnInit(): void {
    let which = this.activatedRoute.snapshot.params['which'];
    if (!['tv', 'movie'].includes(which)) {
      this.router.navigate(['']);
    }
    let idMovie = this.activatedRoute.snapshot.params['id'];
    this.movieService.getById(idMovie, which).subscribe(res => {
      console.log(res);
      this.movie = res;
    });
  }
}
