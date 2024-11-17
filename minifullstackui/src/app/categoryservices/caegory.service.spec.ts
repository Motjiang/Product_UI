import { TestBed } from '@angular/core/testing';

import { CaegoryService } from './caegory.service';

describe('CaegoryService', () => {
  let service: CaegoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaegoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
