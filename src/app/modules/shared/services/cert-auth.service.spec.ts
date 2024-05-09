import { TestBed } from '@angular/core/testing';

import { CertAuthService } from './cert-auth.service';

describe('CertAuthService', () => {
  let service: CertAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
