import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPromosComponent } from './detail-promos.component';

describe('DetailPromosComponent', () => {
  let component: DetailPromosComponent;
  let fixture: ComponentFixture<DetailPromosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPromosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPromosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
