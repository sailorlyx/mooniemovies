import { GenreModel } from './genre.model';
export class MovieModel {
  public esSerie: boolean;
  public id: number;
  public titulo: string;
  public release: string;
  public titulOriginal: string;
  public overview: string;
  public generos: GenreModel[];
  public poster: string;
  public valoracion: string;

  public constructor(infoDeAPI: any) {
    this.esSerie = infoDeAPI.name !== undefined;
    this.id = infoDeAPI.id;
    this.titulo = infoDeAPI.title || infoDeAPI.name;
    this.release = infoDeAPI.release_date || infoDeAPI.first_air_date || '';
    this.titulOriginal = infoDeAPI.original_title || infoDeAPI.original_name;
    this.overview = infoDeAPI.overview;

    if (infoDeAPI.genre_ids) {
      this.generos = infoDeAPI.genre_ids.map((g: number) => new GenreModel({ id: g }));
    } else if (infoDeAPI.genres) {
      this.generos = infoDeAPI.genres.map((g: number) => new GenreModel(g));
    }

    this.poster = infoDeAPI.poster_path;
    this.valoracion = infoDeAPI.popularity;
  }
}