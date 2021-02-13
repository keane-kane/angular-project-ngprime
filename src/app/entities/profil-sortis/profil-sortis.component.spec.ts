import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilSortisComponent } from './profil-sortis.component';

describe('ProfilSortisComponent', () => {
  let component: ProfilSortisComponent;
  let fixture: ComponentFixture<ProfilSortisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilSortisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilSortisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
