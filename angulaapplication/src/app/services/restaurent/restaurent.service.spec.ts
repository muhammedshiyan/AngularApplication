import { TestBed } from '@angular/core/testing';

import { RestaurentService } from './restaurent.service';

describe('Restaurent', () => {
  let service: RestaurentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
