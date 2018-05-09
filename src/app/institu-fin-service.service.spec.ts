import { TestBed, inject } from '@angular/core/testing';

import { InstituFinServiceService } from './institu-fin-service.service';

describe('InstituFinServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstituFinServiceService]
    });
  });

  it('should be created', inject([InstituFinServiceService], (service: InstituFinServiceService) => {
    expect(service).toBeTruthy();
  }));
});
