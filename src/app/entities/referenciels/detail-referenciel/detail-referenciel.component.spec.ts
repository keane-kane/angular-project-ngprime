import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailReferencielComponent } from './detail-referenciel.component';

describe('DetailReferencielComponent', () => {
  let component: DetailReferencielComponent;
  let fixture: ComponentFixture<DetailReferencielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailReferencielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailReferencielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
