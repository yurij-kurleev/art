import { TestBed, inject } from '@angular/core/testing';

import { ExhibitionService } from './exhibition.service';

describe('ExhibitionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExhibitionService]
    });
  });

  it('should be created', inject([ExhibitionService], (service: ExhibitionService) => {
    expect(service).toBeTruthy();
  }));
});
