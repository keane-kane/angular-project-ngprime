import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePromosComponent } from './create-promos.component';

describe('CreatePromosComponent', () => {
  let component: CreatePromosComponent;
  let fixture: ComponentFixture<CreatePromosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePromosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePromosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
