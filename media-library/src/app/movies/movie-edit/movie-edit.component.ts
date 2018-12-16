import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  id: number;
  editMode: boolean = false;
  movieForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private movieService: MovieService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    if (this.editMode) {
      this.movieService.updateMovie(this.id, this.movieForm.value);
    }
    else {
      this.movieService.addMovie(this.movieForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let movieName = '';
    let movieImagePath = '';
    let movieReleaseDate = '';
    let movieGenre = '';

    if(this.editMode) {
      const movie = this.movieService.getMovie(this.id);
      movieName = movie.name;
      movieImagePath = movie.imagePath;
      movieReleaseDate = movie.releaseDate;
      movieGenre = movie.genre;
    }

    this.movieForm = new FormGroup({
      'name': new FormControl(movieName, Validators.required),
      'imagePath': new FormControl(movieImagePath, Validators.required),
      'releaseDate': new FormControl(movieReleaseDate),
      'genre': new FormControl(movieGenre)
    })

  }

}
