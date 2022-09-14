import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesNavigationComponent } from './courses-navigation.component';

describe('CoursesNavigationComponent', () => {
  let component: CoursesNavigationComponent;
  let fixture: ComponentFixture<CoursesNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
