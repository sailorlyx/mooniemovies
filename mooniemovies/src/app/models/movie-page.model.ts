import { MovieModel } from './movie.models';
export class MoviePage {
  public page: number;
  public results: MovieModel[];
  public totalPages: number;
  public totalResults: number;

  public constructor(infoDeApi: any) {
    this.page = infoDeApi.page;
    this.results = [];
    for (let item of infoDeApi.results) {
      this.results.push(new MovieModel(item));
    }
    this.totalPages = infoDeApi.total_pages;
    this.totalResults = infoDeApi.total_results;
  }
}