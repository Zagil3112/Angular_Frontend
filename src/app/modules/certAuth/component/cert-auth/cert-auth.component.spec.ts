import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertAuthComponent } from './cert-auth.component';

describe('CertAuthComponent', () => {
  let component: CertAuthComponent;
  let fixture: ComponentFixture<CertAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
