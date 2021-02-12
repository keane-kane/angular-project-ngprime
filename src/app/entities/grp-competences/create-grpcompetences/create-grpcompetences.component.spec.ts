import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGrpcompetencesComponent } from './create-grpcompetences.component';

describe('CreateGrpcompetencesComponent', () => {
  let component: CreateGrpcompetencesComponent;
  let fixture: ComponentFixture<CreateGrpcompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGrpcompetencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGrpcompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
