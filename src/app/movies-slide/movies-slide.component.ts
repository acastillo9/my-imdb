import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from '../movie/movie';

@Component({
  selector: 'app-movies-slide',
  templateUrl: './movies-slide.component.html',
  styleUrls: ['./movies-slide.component.css'],
})
export class MoviesSlideComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Movie[]>(`${environment.apiUrl}/movies`)
      .subscribe((movies) => {
        this.movies = movies;
      });
  }
}
