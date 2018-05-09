import { TestBed, inject } from '@angular/core/testing';

import { EntrepriseServiceService } from './entreprise-service.service';

describe('EntrepriseServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntrepriseServiceService]
    });
  });

  it('should be created', inject([EntrepriseServiceService], (service: EntrepriseServiceService) => {
    expect(service).toBeTruthy();
  }));
});
