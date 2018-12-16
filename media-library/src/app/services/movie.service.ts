import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  moviesChanged = new Subject<Movie[]>();

  private movies: Movie[] = [
    new Movie('Jaws', '1982', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Jaws_Book_1975_Cover.jpg/824px-Jaws_Book_1975_Cover.jpg', 'Thriller'),
    new Movie('Pokemon 2000', '2000', 'https://cdn.bulbagarden.net/upload/b/b1/P2kposter.jpg', 'Fantasy')
  ];

  constructor() { }

setMovies(movies: Movie[]) {
  this.movies = movies;
  this.moviesChanged.next(this.movies.slice());
}

getMovies() {
  return this.movies.slice();
}

getMovie(index: number) {
  return this.movies[index];
}

addMovie(movie: Movie) {
  this.movies.push(movie);
  this.moviesChanged.next(this.movies.slice());
}

updateMovie(index: number, newMovie: Movie) {
  this.movies[index] = newMovie;
  this.moviesChanged.next(this.movies.slice());
}

deleteMovie(index: number) {
  this.movies.splice(index, 1);
  this.moviesChanged.next(this.movies.slice());
}

}