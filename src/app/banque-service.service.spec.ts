import { TestBed, inject } from '@angular/core/testing';

import { BanqueServiceService } from './banque-service.service';

describe('BanqueServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BanqueServiceService]
    });
  });

  it('should be created', inject([BanqueServiceService], (service: BanqueServiceService) => {
    expect(service).toBeTruthy();
  }));
});
