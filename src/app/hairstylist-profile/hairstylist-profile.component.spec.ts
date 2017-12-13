import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HairstylistProfileComponent } from './hairstylist-profile.component';

describe('HairstylistProfileComponent', () => {
  let component: HairstylistProfileComponent;
  let fixture: ComponentFixture<HairstylistProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HairstylistProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HairstylistProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
