import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageCoverComponent } from './home-page-cover.component';

describe('HomePageCoverComponent', () => {
  let component: HomePageCoverComponent;
  let fixture: ComponentFixture<HomePageCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
