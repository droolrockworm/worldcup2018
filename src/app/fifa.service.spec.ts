import { TestBed, inject } from '@angular/core/testing';

import { FifaService } from './fifa.service';

describe('FifaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FifaService]
    });
  });

  it('should be created', inject([FifaService], (service: FifaService) => {
    expect(service).toBeTruthy();
  }));
});
