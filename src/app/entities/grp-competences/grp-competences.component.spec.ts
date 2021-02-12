import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrpCompetencesComponent } from './grp-competences.component';

describe('GrpCompetencesComponent', () => {
  let component: GrpCompetencesComponent;
  let fixture: ComponentFixture<GrpCompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrpCompetencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrpCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
