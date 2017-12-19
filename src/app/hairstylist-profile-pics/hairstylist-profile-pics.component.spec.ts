import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HairstylistProfilePicsComponent } from './hairstylist-profile-pics.component';

describe('HairstylistProfilePicsComponent', () => {
  let component: HairstylistProfilePicsComponent;
  let fixture: ComponentFixture<HairstylistProfilePicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HairstylistProfilePicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HairstylistProfilePicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
