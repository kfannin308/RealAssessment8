import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class MovieService {
  private inventory: Movie[] = [
    { title: "Toy Story", releaseYear: 1995 },
    { title: "Forrest Gump", releaseYear: 1994 },
  ];
  public getMovies(): Movie[] {
    return this.inventory;
  }
  constructor() { }
}
export interface Movie {
  title: string;
  releaseYear: number;
}
