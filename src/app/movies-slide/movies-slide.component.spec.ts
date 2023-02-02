import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesSlideComponent } from './movies-slide.component';

describe('MoviesSlideComponent', () => {
  let component: MoviesSlideComponent;
  let fixture: ComponentFixture<MoviesSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesSlideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
