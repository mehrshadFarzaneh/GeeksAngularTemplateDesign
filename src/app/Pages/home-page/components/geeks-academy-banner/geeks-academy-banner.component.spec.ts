import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeeksAcademyBannerComponent } from './geeks-academy-banner.component';

describe('GeeksAcademyBannerComponent', () => {
  let component: GeeksAcademyBannerComponent;
  let fixture: ComponentFixture<GeeksAcademyBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeeksAcademyBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeeksAcademyBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
