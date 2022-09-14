import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeeksAcademyExtraInfoComponent } from './geeks-academy-extra-info.component';

describe('GeeksAcademyExtraInfoComponent', () => {
  let component: GeeksAcademyExtraInfoComponent;
  let fixture: ComponentFixture<GeeksAcademyExtraInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeeksAcademyExtraInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeeksAcademyExtraInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
