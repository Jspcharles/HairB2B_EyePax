import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingShowsComponent } from './booking-shows.component';

describe('BookingShowsComponent', () => {
  let component: BookingShowsComponent;
  let fixture: ComponentFixture<BookingShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingShowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
