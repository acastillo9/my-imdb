import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipperTestComponent } from './swipper-test.component';

describe('SwipperTestComponent', () => {
  let component: SwipperTestComponent;
  let fixture: ComponentFixture<SwipperTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwipperTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwipperTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
