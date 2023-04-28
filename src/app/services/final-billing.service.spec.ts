import { TestBed } from '@angular/core/testing';

import { FinalBillingService } from './final-billing.service';

describe('FinalBillingService', () => {
  let service: FinalBillingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinalBillingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
