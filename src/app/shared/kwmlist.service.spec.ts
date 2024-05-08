import { TestBed } from '@angular/core/testing';

import { KwmlistService } from './kwmlist.service';

describe('KwmlistService', () => {
  let service: KwmlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KwmlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
