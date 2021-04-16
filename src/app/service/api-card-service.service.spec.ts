import { TestBed } from '@angular/core/testing';

import { ApiCardServiceService } from './api-card-service.service';

describe('ApiCardServiceService', () => {
  let service: ApiCardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
