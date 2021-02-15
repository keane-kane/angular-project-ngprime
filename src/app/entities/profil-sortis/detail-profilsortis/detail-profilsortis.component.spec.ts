import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProfilSortisComponent } from './detail-profilsortis.component';

describe('ProfilDetailComponent', () => {
  let component: DetailProfilSortisComponent;
  let fixture: ComponentFixture<DetailProfilSortisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailProfilSortisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProfilSortisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
