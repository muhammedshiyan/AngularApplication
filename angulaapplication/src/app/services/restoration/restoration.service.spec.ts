import { TestBed } from '@angular/core/testing';

import { Restoration } from './restoration.service';

describe('Restoration', () => {
  let service: Restoration;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Restoration);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
