import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Movie } from '../movie/movie';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css'],
})
export class EditMovieComponent {
  formMovie = new FormGroup({
    title: new FormControl('', [Validators.required]),
    rating: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.max(10),
    ]),
    poster: new FormControl(''),
  });
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (!this.formMovie.valid) {
      this.errorMessage = 'el formulario no esta completo';
      return;
    }

    const data = this.formMovie.value;
    console.log(data);
    this.http
      .post<Movie>(`${environment.apiUrl}/movies`, data)
      .subscribe((movie) => {
        console.log(movie);
      });
  }
}
