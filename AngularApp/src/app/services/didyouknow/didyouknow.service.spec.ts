import { TestBed } from '@angular/core/testing';

import { DidyouknowService } from './didyouknow.service';

describe('DidyouknowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DidyouknowService = TestBed.get(DidyouknowService);
    expect(service).toBeTruthy();
  });
});
