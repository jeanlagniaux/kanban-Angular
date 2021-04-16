import { TestBed } from '@angular/core/testing';

import { ApiProjectServiceService } from './api-project-service.service';

describe('ApiProjectServiceService', () => {
  let service: ApiProjectServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiProjectServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
