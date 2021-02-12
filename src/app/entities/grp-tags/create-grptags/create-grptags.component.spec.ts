import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGrptagsComponent } from './create-grptags.component';

describe('CreateGrptagsComponent', () => {
  let component: CreateGrptagsComponent;
  let fixture: ComponentFixture<CreateGrptagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGrptagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGrptagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
