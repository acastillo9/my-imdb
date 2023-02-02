import { Component } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, {
  A11y,
  Navigation,
  Pagination,
  Scrollbar,
  SwiperOptions,
} from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-swipper-test',
  templateUrl: './swipper-test.component.html',
  styleUrls: ['./swipper-test.component.css'],
})
export class SwipperTestComponent {
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  onSwiper($event: any) {
    console.log($event);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
