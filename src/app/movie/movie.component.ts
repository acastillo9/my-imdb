import { Component, Input } from '@angular/core';
import { Movie } from './movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  @Input() movie: Movie | null = null;

  onSwiper([swiper]: any) {
    console.log(swiper);
  }
}
