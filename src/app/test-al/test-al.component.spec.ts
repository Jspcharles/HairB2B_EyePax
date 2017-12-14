import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAlComponent } from './test-al.component';

describe('TestAlComponent', () => {
  let component: TestAlComponent;
  let fixture: ComponentFixture<TestAlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
