import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCertAuthComponent } from './new-cert-auth.component';

describe('NewCertAuthComponent', () => {
  let component: NewCertAuthComponent;
  let fixture: ComponentFixture<NewCertAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCertAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCertAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
