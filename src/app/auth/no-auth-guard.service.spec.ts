import { TestBed, inject } from '@angular/core/testing';

import { NoAuthGuardService } from './no-auth-guard.service';

describe('NoAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoAuthGuardService]
    });
  });

  it('should be created', inject([NoAuthGuardService], (service: NoAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
