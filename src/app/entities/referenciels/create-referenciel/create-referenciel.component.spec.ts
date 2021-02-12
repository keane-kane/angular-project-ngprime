import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReferencielComponent } from './create-referenciel.component';

describe('CreateReferencielComponent', () => {
  let component: CreateReferencielComponent;
  let fixture: ComponentFixture<CreateReferencielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateReferencielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReferencielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
