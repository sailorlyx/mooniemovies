import { Component, Input, OnInit } from '@angular/core';
import { MovieModel } from '../models/movie.models';

@Component({
  selector: 'app-listapelis',
  templateUrl: './listapelis.component.html',
  styleUrls: ['./listapelis.component.scss']
})
export class ListapelisComponent implements OnInit {

  @Input() movies: MovieModel[]

  constructor() { }

  ngOnInit(): void {
  }

}
