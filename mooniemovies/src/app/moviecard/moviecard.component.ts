import { Component, Input, OnInit } from '@angular/core';
import { MovieModel } from '../models/movie.models';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.scss']
})
export class MoviecardComponent implements OnInit {
  @Input() movie: MovieModel

  constructor() { }

  ngOnInit(): void {
  }

}
