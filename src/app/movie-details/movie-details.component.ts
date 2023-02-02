import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Movie } from '../movie/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params);
      const id = params['id'];
      this.http
        .get<Movie>(`${environment.apiUrl}/movies/${id}`)
        .subscribe((movie) => {
          this.movie = movie;
        });
    });

    this.route.queryParams.subscribe((queryParams) => {
      console.log(queryParams);
    });
  }
}
