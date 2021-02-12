import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompetencesComponent } from './create-competences.component';

describe('CreateCompetencesComponent', () => {
  let component: CreateCompetencesComponent;
  let fixture: ComponentFixture<CreateCompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCompetencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
