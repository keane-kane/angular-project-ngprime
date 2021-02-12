import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencielsComponent } from './referenciels.component';

describe('ReferencielsComponent', () => {
  let component: ReferencielsComponent;
  let fixture: ComponentFixture<ReferencielsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferencielsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferencielsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
