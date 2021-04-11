export class MovieModel {

    public titulo: string;
    public release: number;
    public titulOriginal: string;
    public overview: string;
    public genero: string;
    public poster: any;
    public valoracion: string;

    public constructor(infoDeAPI: any) {
        this.titulo = infoDeAPI.title;
        this.release = infoDeAPI.release_date;
        this.titulOriginal = infoDeAPI.original_title;
        this.overview = infoDeAPI.overview;
        this.genero = infoDeAPI.genres;
        this.poster = infoDeAPI.poster_path;
        this.valoracion = infoDeAPI.popularity;



    }
}