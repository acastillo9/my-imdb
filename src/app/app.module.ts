import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { MenuComponent } from './header/menu/menu.component';
import { LinksComponent } from './header/menu/links/links.component';
import { BsMenuComponent } from './header/bs-menu/bs-menu.component';
import { MenuSidebarComponent } from './header/menu-sidebar/menu-sidebar.component';
import { AccordionMenuComponent } from './header/menu-sidebar/accordion-menu/accordion-menu.component';
import { MoviesComponent } from './movies/movies.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { MoviesSlideComponent } from './movies-slide/movies-slide.component';
import { MovieComponent } from './movie/movie.component';
import { SwiperModule } from 'swiper/angular';
import { SwipperTestComponent } from './swipper-test/swipper-test.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { EstrenosComponent } from './estrenos/estrenos.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './auth.interceptor';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { PaymentModule } from './payment/payment.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    LinksComponent,
    BsMenuComponent,
    MenuSidebarComponent,
    AccordionMenuComponent,
    MoviesComponent,
    MoviesSlideComponent,
    MovieComponent,
    SwipperTestComponent,
    TvShowsComponent,
    MovieDetailsComponent,
    EstrenosComponent,
    EditMovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    SwiperModule,
    ReactiveFormsModule,
    AlertModalComponent,
    PaymentModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
