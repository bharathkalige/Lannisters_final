import { TestBed } from '@angular/core/testing';

import { LocalStorage1Service } from './local-storage1.service';

describe('LocalStorage1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalStorage1Service = TestBed.get(LocalStorage1Service);
    expect(service).toBeTruthy();
  });
});
