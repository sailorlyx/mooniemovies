export class GenreModel {
  public id: number;
  public name: string;

  public constructor(infoDeAPI: any) {
    this.id = infoDeAPI.id;
    this.name = infoDeAPI.name;
  }
}