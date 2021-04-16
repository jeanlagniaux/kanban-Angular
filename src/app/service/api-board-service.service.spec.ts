import { TestBed } from '@angular/core/testing';

import { ApiBoardServiceService } from './api-board-service.service';

describe('ApiBoardServiceService', () => {
  let service: ApiBoardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiBoardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
