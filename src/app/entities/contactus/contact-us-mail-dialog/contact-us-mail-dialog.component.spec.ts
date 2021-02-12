import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ContactUsMailDialogComponent } from './contact-us-mail-dialog.component';

describe('ContactUsMailDialogComponent', () => {
  let component: ContactUsMailDialogComponent;
  let fixture: ComponentFixture<ContactUsMailDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUsMailDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsMailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
