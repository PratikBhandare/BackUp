import { TestBed } from '@angular/core/testing';

import { UserroutingService } from './userrouting.service';

describe('UserroutingService', () => {
  let service: UserroutingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserroutingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
