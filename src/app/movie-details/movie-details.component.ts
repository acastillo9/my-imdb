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

  crearPelicula() {
    this.http
      .post<Movie>(`${environment.apiUrl}/movies`, {
        id: '5',
        title: 'Back to the future 2',
        rating: 8,
        poster:
          'https://m.media-amazon.com/images/M/MV5BNGZhMDM0YTItZTIwYy00ZTA0LTkxYmYtY2MzNzZkOGFkNThjXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg',
      })
      .subscribe((movie) => {
        console.log(movie);
      });
  }

  borrarPelicula() {
    const id = '5';
    this.http.delete(`${environment.apiUrl}/movies/${id}`).subscribe((data) => {
      console.log(data);
    });
  }

  actualizarPelicula() {
    const id = '5';
    this.http
      .put<Movie>(`${environment.apiUrl}/movies/${id}`, {
        id: '5',
        title: 'Back to the future 1',
        rating: 7,
        poster:
          'https://m.media-amazon.com/images/M/MV5BNGZhMDM0YTItZTIwYy00ZTA0LTkxYmYtY2MzNzZkOGFkNThjXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg',
      })
      .subscribe((movie) => {
        console.log(movie);
      });
  }

  actualizarPeliculaPatch() {
    const id = '5';
    this.http
      .patch<Movie>(`${environment.apiUrl}/movies/${id}`, {
        title: 'Back to the future 2',
      })
      .subscribe((movie) => {
        console.log(movie);
      });
  }
}
