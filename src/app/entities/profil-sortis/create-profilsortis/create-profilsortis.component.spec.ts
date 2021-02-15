import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProfilSortisComponent } from './create-profilsortis.component';

describe('CreateProfilSortisComponent', () => {
  let component: CreateProfilSortisComponent;
  let fixture: ComponentFixture<CreateProfilSortisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProfilSortisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProfilSortisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
