import { Component, OnInit } from '@angular/core';
import { MovieService, Movie } from '../movie.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private myMovieService: MovieService) { }

  ngOnInit(): void {
    this.movies = this.myMovieService.getMovies();
  }
  public movies: Movie[] = [];

}
