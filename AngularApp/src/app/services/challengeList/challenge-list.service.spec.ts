import { TestBed } from '@angular/core/testing';

import { ChallengeListService } from './challenge-list.service';

describe('ChallengeListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChallengeListService = TestBed.get(ChallengeListService);
    expect(service).toBeTruthy();
  });
});
