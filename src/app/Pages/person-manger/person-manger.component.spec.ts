import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonMangerComponent } from './person-manger.component';

describe('PersonMangerComponent', () => {
  let component: PersonMangerComponent;
  let fixture: ComponentFixture<PersonMangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonMangerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonMangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
