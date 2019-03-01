import { TestBed } from '@angular/core/testing';

import { Heroes.ServiceService } from './heroes.service.service';

describe('Heroes.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Heroes.ServiceService = TestBed.get(Heroes.ServiceService);
    expect(service).toBeTruthy();
  });
});
