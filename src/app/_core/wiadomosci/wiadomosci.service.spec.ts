import { TestBed, inject } from '@angular/core/testing';

import { WiadomosciService } from './wiadomosci.service';

describe('WiadomosciService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WiadomosciService]
    });
  });

  it('should be created', inject([WiadomosciService], (service: WiadomosciService) => {
    expect(service).toBeTruthy();
  }));
});
