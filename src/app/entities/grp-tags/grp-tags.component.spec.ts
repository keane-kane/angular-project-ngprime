import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrpTagsComponent } from './grp-tags.component';

describe('GrpTagsComponent', () => {
  let component: GrpTagsComponent;
  let fixture: ComponentFixture<GrpTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrpTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrpTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
