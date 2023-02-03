import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { EstrenosComponent } from './estrenos/estrenos.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent,
    children: [
      {
        path: 'estrenos',
        component: EstrenosComponent,
      },
    ],
  },
  {
    path: 'movies/:id',
    component: MovieDetailsComponent,
  },
  {
    path: 'edit-movie',
    component: EditMovieComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'tv-shows',
    component: TvShowsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
