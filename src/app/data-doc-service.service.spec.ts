import { TestBed, inject } from '@angular/core/testing';

import { DataDocServiceService } from './data-doc-service.service';

describe('DataDocServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataDocServiceService]
    });
  });

  it('should be created', inject([DataDocServiceService], (service: DataDocServiceService) => {
    expect(service).toBeTruthy();
  }));
});
